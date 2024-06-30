import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center gap-1 shadow-sm p-2'>
      <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
          className="h-9"
        />
        <span className='font-bold px-2'>{name} :</span>
        <span>{message}</span>
t    </div>
  )
}

export default ChatMessage