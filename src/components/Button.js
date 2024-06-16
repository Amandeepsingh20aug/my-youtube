import React from 'react'

const Button = ({text,onClick,select}) => {
  return (
    <div>
      <button className={!select ? 'px-5 py-2 m-2 rounded-lg bg-gray-200' : 'px-5 py-2 m-2 rounded-lg bg-black text-white'} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button