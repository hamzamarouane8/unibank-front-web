import React from 'react'
import {Popover} from '@blueprintjs/core'

export default ({content, target, position, children}) => (
  <Popover content={content} target={target || children} position={position} />
)
