import React, { type ReactElement } from 'react'

interface Props {
  label: string
  onClick?: () => void
}

export const Button = ({ label, onClick }: Props): ReactElement => {
  return (
    <button className="border border-neutral-950 rounded font-bold px-4 py-2 hover:bg-neutral-50" onClick={onClick}>
      {label}
    </button>
  )
}
