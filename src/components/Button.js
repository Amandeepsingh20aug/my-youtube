import React from 'react'

const Button = ({text}) => {
  return (
    <div>
      <button className='px-5 py-2 m-2 rounded-lg bg-gray-200'>{text}</button>
    </div>
  )
}

export default Button