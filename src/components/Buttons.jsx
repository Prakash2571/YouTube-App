import React from 'react'

const Buttons = (props) => {
  return (
    <div className='m-2 p-2 shadow h-10 w-18 bg-gray-200 border border-gray-400 rounded-full whitespace-nowrap text-sm cursor-pointer '>{props.name}</div>
  )
}

export default Buttons