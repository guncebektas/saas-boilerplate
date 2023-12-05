export const baseFormClasses: string[] = [
  'flex',
  'max-w-md',
  'flex-col',
  'gap-4'
];

export const baseTextClasses: string[] = [
  'text-gray-900',
  'dark:text-white',
]

export const baseFieldClasses: string[] = [
  'border-gray-300',
  'bg-gray-50',
  'focus:border-cyan-500',
  'focus:ring-cyan-500',
  'dark:border-gray-600',
  'dark:bg-gray-700',
  'dark:focus:border-cyan-500',
  'dark:focus:ring-cyan-500',
  'rounded-md'
];

export const baseInputClasses: string[] = [
  ...baseTextClasses,
  ...baseFieldClasses,
  'block',
  'w-full',
  'dark:placeholder-gray-400',
]
