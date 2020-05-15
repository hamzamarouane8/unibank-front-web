import React from 'react'

export default ({to, onClick, children, ...props}) => {

  if (onClick || !to) return (
    <a href="javascript:void(0)" onClick={onClick} {...props}>
      {children}
    </a>
  )
  throw new Error('TODO')

}
