import React from 'react'

const Input = ({label, ...rest}) => {
  return (
    <div className='inputWrapper'>
        <p className='label'>{label}</p>
        <input className='input' {...rest} />
    </div>
  )
}

export default Input