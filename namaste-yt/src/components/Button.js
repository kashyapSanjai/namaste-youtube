import React from 'react'

const Button = ({name,id}) => {
  return (
    <div className='p-2 mr-3 bg-gray-200 w-40 text-center shadow-md' key={id}>
        <button>{name}</button>
    </div>
  )
}

export default Button