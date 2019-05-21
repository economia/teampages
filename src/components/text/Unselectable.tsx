import React from 'react'

export const Unselectable = (props: any) => (
  <span style={{ userSelect: 'none' }}>{props.children}</span>
)
