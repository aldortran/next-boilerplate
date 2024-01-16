import React, { type ReactElement } from 'react'

interface Props {
  label: string
}

export const Button = ({ label }: Props): ReactElement => {
  return (
    <button>
      {label}
    </button>
  )
}
