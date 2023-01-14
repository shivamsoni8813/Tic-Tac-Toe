import React from 'react'
import "./Scoreboard.css"
const Scoreboard = ({score,xplay}) => {   
     const {xscore, oscore} = score
  return (
    <div className='scoreboard'>
      <span className={`score x-score ${!xplay && "inactive"}`}> X - {xscore}</span>
      <span className={`score o-score ${xplay && "inactive"}`}> O - {oscore}</span>
    </div>
  )
}

export default Scoreboard
