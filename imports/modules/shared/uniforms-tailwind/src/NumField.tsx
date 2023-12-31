// @ts-ignore
import classnames from 'classnames';
import React, {Ref} from 'react';
import {connectField, HTMLFieldProps} from 'uniforms';

import wrapField from './wrapField';
import {baseInputClasses} from "./baseFormClasses";

export type NumFieldProps = HTMLFieldProps<
  number,
  HTMLDivElement,
  {
    decimal?: boolean;
    inputClassName?: string;
    inputRef?: Ref<HTMLInputElement>;
  }
>;

function Num(props: NumFieldProps) {
  return wrapField(
    props,
    <input
      className={classnames(
        ...baseInputClasses,
        {
          'bg-gray-50': props.disabled,
          'border-red-300': props.error,
          'border-green-300': !props.error && props.changed,
        }
      )}
      disabled={props.disabled}
      id={props.id}
      max={props.max}
      min={props.min}
      name={props.name}
      onChange={(event) => {
        const parse = props.decimal ? parseFloat : parseInt;
        const value = parse(event.target.value);
        props.onChange(isNaN(value) ? undefined : value);
      }}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      ref={props.inputRef}
      step={props.step || (props.decimal ? 0.01 : 1)}
      type="number"
      value={props.value ?? ''}
    />
  );
}

export default connectField<NumFieldProps>(Num, {kind: 'leaf'});
