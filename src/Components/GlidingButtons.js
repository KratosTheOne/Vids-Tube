import React from 'react'

const GlidingButtons = ({ name }) => {
  return (
    <div>
        <button className="px-5 py-1 mx-2 my-5 bg-gray-200 rounded-lg w-max">{name}</button>
    </div>
  )
}

export default GlidingButtons;