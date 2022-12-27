import React from 'react'

const Textarea = (...rest) => {
  return (
    <div>
        <textarea className='text-area' {...rest}>

        </textarea>
    </div>
  )
}

export default Textarea