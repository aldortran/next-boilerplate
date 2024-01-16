import React, { type ReactElement } from 'react'

import { Button } from '../components/atoms/Button'

export default function Page (): ReactElement {
  return (
    <div className="p-4">
      <p>Lorem ipsum dolor sit amet</p>

      <p className="mt-4">
        <Button
          label="Click Me"
          onClick={() => {
            alert('You\'ve clicked the button!')
          }}
        />
      </p>
    </div>
  )
}
