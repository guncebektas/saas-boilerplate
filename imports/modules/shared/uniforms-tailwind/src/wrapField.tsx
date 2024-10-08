import classnames from 'classnames';
import omit from 'lodash/omit';
import React, {HTMLProps, ReactNode} from 'react';
import {Override, filterDOMProps} from 'uniforms';

import gridClassName from './gridClassName';
import {useTranslator} from "../../../../../client/ui/providers/i18n";

type WrapperProps = Override<Omit<HTMLProps<HTMLDivElement>, 'onChange'>, {
  changed?: boolean;
  error?: unknown;
  errorMessage?: string;
  grid?: number | string | Record<string, number>;
  help?: string;
  helpClassName?: string;
  label?: ReactNode;
  labelClassName?: string | string[];
  showInlineError?: boolean;
  value?: boolean | string | number | string[] | undefined;
  wrapClassName?: string;
}>;

export default function wrapField(
  {
    changed,
    className,
    disabled,
    error,
    errorMessage,
    grid, // Grid is either a number between 1 and 11 or an object with keys like xs and md.
    help, // Help text.
    helpClassName, // Help text class name.
    id,
    label,
    labelClassName, // Label class name (String|Array[String]).
    required,
    showInlineError, // Show inline error message?
    wrapClassName, // Input wrapper class name.
    ...props
  }: WrapperProps,
  children: ReactNode,
) {
  const t = useTranslator();

  const hasWrap = !!(grid || wrapClassName);
  const blockError = !!(error && showInlineError) && (
    <span className="form-text text-red-500">{errorMessage}</span>
  );
  const blockHelp = !!help && (
    <span className={classnames('form-text', helpClassName || 'text-gray-500')}>
      {help}
    </span>
  );

  return (
    <div
      className={classnames(
        className,
        'mb-3',
        {
          'is-invalid': error,
          disabled,
          required,
          row: grid,
        })}
      {...omit(filterDOMProps(props), [
        'checkboxes',
        'inline',
        'inputClassName',
        'inputRef',
        'rows',
      ])}
    >
      {label && (
        <div className={'mb-2'}>
          <label
            htmlFor={id}
            className={classnames([
                'text-sm',
                'font-medium',
                'text-gray-900',
                'dark:text-white'
              ], {
                'col-form-label': grid,
                'text-red-500': error,
                'text-green-500': !error && changed,
              },
              gridClassName(grid, 'label'),
              labelClassName,
            )}
          >
            {t(label)}
          </label>
        </div>
      )}

      {hasWrap && (
        <div
          className={classnames(wrapClassName, gridClassName(grid, 'input'))}
        >
          {children}
          {blockHelp}
          {blockError}
        </div>
      )}

      {!hasWrap && children}
      {!hasWrap && blockHelp}
      {!hasWrap && blockError}
    </div>
  );
}

declare module 'uniforms' {
  interface FilterDOMProps {
    grid: never;
  }
}
