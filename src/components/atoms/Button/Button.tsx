import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import React, { type ReactElement } from 'react'

interface Props {
  label: string
  fullWidth?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  onClick?: () => void
}

export const Button = ({ label, fullWidth, isDisabled, isLoading, onClick }: Props): ReactElement => {
  return (
    <button
      className={clsx(
        'border border-neutral-950 rounded font-bold h-12 px-4 py-2',
        'dark:border-white',
        'hover:bg-neutral-100',
        'dark:hover:bg-neutral-900',
        'disabled:bg-neutral-100 disabled:border-neutral-100 disabled:text-neutral-400',
        'dark:disabled:bg-neutral-900 dark:disabled:border-neutral-900 dark:disabled:text-neutral-500',
        fullWidth && 'w-full'
      )}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {isLoading && (
        <FontAwesomeIcon icon={faSpinner} fixedWidth spin className="mr-2"/>
      )}

      <span>{label}</span>
    </button>
  )
}
