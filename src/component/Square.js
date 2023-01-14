import React from 'react'
import "./Box.css"


const Square = ({value,onClick}) => {
    let style = value === "X" ? "box x" : "box o"

  return (
    <div>
      <button className={style} onClick={onClick}>{value}</button>
      
    </div>
  )
}

export default Square
