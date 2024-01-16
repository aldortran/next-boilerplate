import React, { type ReactElement } from 'react'

import { Button } from '../components/atoms/Button'

export default function Page (): ReactElement {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet</p>

      <p>
        <Button label="Click Me"/>
      </p>
    </div>
  )
}
