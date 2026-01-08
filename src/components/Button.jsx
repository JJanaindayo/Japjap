import React from 'react'

const Button = ({ styles, title, handleclick,}) => {
  return (
    <button
     onClick={handleclick}
     className= {`p-1.25 font-body hover:cursor-pointer ${styles}`}
    >
     <span>{title}</span>
    </button>
  )
}

export default Button