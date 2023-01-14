import React from 'react'
import "./Resets.css"
export default function resets({resetboard}) {
  return (
    <button className='reset-btn' onClick={resetboard}> New Game</button>      
  )
}
