import { useState } from 'react';
import './App.css';
import Board from './component/Board';
import Scoreboard from './component/Scoreboard';
import Resets from './component/Resets'

function App() {
  let win_condition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  const [game, setgame] = useState(false)
  const [board , setboard] = useState(Array(9).fill(null))
  const [xplay, setxplay] = useState(true)
  var [score , setscore] = useState({xscore : 0, oscore : 0})

  let handleClick = (boxidx)=>{
    let updateBoard = board.map((value , idx)=>{
      if(idx === boxidx){
        return xplay === true ? "X" : "O"
      }
      else{
        return value
      }
    })

     setboard(updateBoard)
    let winner = checkwin(updateBoard)
    if (winner) {
      if (winner === "O") {
        let {oscore} = score;
        oscore += 1;
        setscore({...score,oscore})
      }else{
        let{xscore} = score
        xscore += 1
        
        setscore({...score,xscore})
      }
    }
     setxplay(!xplay)
  }
  
  const checkwin = (board) =>{
    for(let i = 0; i < win_condition.length; i++){
      let [x,y,z] = win_condition[i]
      if (board[x] && board[x] === board[y] && board[y]===board[z] ) {
        setgame(true)
        return board[x]
      }
    }
  }

  let resetboard = ()=> {
      setgame(false)
      setboard(Array(9).fill(null))
  }
  return (
    <>
    <div className="App">
      <Scoreboard score = {score} xplay = {xplay}/>
    <Board board = {board} onClick = {game ? resetboard : handleClick}/>
    <Resets resetboard = {resetboard}/>
    </div>
    </>
  );
}

export default App;
