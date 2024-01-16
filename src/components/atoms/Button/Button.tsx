import clsx from 'clsx'
import React, { type ReactElement } from 'react'

interface Props {
  label: string
  isLoading?: boolean
  onClick?: () => void
}

export const Button = ({ label, isLoading, onClick }: Props): ReactElement => {
  return (
    <button
      className={clsx(
        'border border-neutral-950 rounded font-bold px-4 py-2',
        'dark:border-white',
        'hover:bg-neutral-100',
        'dark:hover:bg-neutral-900',
        isLoading && 'bg-neutral-100 border-neutral-100 text-neutral-400',
        isLoading && 'dark:bg-neutral-900 dark:border-neutral-900 dark:text-neutral-500'
      )}
      onClick={onClick}
      disabled={isLoading}
    >
      {label}
    </button>
  )
}
