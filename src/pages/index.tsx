import React, { type ReactElement } from 'react'

import { Button } from '../components/atoms/Button'

export default function Page (): ReactElement {
  return (
    <div className="p-4">
      <p>Lorem ipsum dolor sit amet</p>

      <p
        className="mt-4"
        onClick={() => {
          alert('You\'ve clicked the button!')
        }}
      >
        <Button label="Click Me"/>
      </p>
    </div>
  )
}
