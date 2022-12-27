import React from 'react'

const Button = ({title, ...rest}) => {
  return (
    <div>
        <button className='button' {...rest}>{title}</button>
    </div>
  )
}

export default Button