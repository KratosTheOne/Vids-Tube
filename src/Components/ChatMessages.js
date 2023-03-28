import React from 'react'

const ChatMessages = ({ name, message }) => {
  return (
    <div className="flex items-center p-1">
        <img 
          className="h-8"
          alt="user-icon" 
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" 
        />
        <span className="px-2 text-gray-600 font-semibold">{name}</span>
        <span className="px-1">{message}</span>
    </div>
  )
}

export default ChatMessages