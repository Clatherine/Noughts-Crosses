

import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [turnState, setTurnState] = useState('x')
    const[result, setResult] =  useState(null)
    const [isNewGame, setIsNewGame] = useState(true)

    return <section id="whole">
        <Header  />
        <section id="main_body">
         <div className="half" id="text">
<div id="text_div">
            <p>Find a partner, and take it in turns to choose where to place your counter.</p><p>The winner is the first person to get three of their counters in a row, either vertically, horizontally, or diagonally.</p>
            <p>Good luck!</p></div>
            {result? <PlayAgain result = {result} setResult={setResult} setIsNewGame={setIsNewGame}/>:null}</div>
        <div className="half" id="right">  {result?  <Result result = {result} setResult={setResult}/>: <Turn turnState ={turnState}/>    }
         <Board setTurnState={setTurnState} turnState={turnState} setResult={setResult} result = {result}   setIsNewGame={setIsNewGame}  isNewGame={isNewGame}/>
        </div>
         </section>
    </section>
}

function Header (){
    return (
        <section id="header" fixed="top">
            <h1>Noughts & Crosses</h1>
           
        </section>
    )
}
function Result ({result}){
    return(
        <section className="result">
           <p>{result} wins!</p>
        </section>
    )
}

function PlayAgain({result, setResult, setIsNewGame}){
    function restart(){
        setIsNewGame(true)
        setResult(null)
      }
      return(
        <section id="play_again">
        <button onClick={restart}>Play again</button>
     </section>
 )
}

function Turn ({turnState}){
    
    return(
    <div className="result">
       {turnState} 's go!
    </div>
    )
    }
    export default App;

function Board({setTurnState, turnState, setResult, result, isNewGame, setIsNewGame}){

    useEffect(() => {
      if(isNewGame){
    const buttons = document.getElementsByTagName('button')
    const greens = document.getElementsByClassName('green')
for (let i=0; i<buttons.length; i++){
    
buttons[i].innerHTML='';
buttons[i].disabled=false

}
const greensArray = Array.from(greens);
for (let i=0; i<greensArray.length; i++){

greensArray[i].classList.remove('green')
}
            
            }}
        
      , [isNewGame]);


    const handleClick = (event)=> {
if(turnState==='x'){
event.target.innerHTML = 'x'
setTurnState('o')}
else{event.target.innerHTML = 'o'
    setTurnState('x')
}
event.target.disabled ='true'
const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')


if (one.innerHTML !=='' || two.innerHTML !=='' || three.innerHTML !=='' || four.innerHTML !=='' || five.innerHTML !=='' || six.innerHTML !=='' || seven.innerHTML !=='' || eight.innerHTML !=='' || nine.innerHTML !=='' || result ===null){
    setIsNewGame(false)
}

if (one.innerHTML !=='' && two.innerHTML !=='' && three.innerHTML !=='' && four.innerHTML !=='' && five.innerHTML !=='' && six.innerHTML !=='' && seven.innerHTML !=='' && eight.innerHTML !=='' && nine.innerHTML !=='' && result ===null){
    setResult('No one')
}
if(one.innerHTML ==='x' && two.innerHTML ==='x' && three.innerHTML ==='x'){
    setResult('x')
    one.classList.add('green')
    two.classList.add('green')
    three.classList.add('green')
    const buttons = document.getElementsByTagName('button')
    const buttonsArr = [...buttons]
    buttonsArr.forEach((button)=>{
        button.disabled = 'true'
    })
} if( one.innerHTML ==='x' && four.innerHTML ==='x' && seven.innerHTML==='x'){
one.classList.add('green')
four.classList.add('green')
seven.classList.add('green')
setResult('x')
const buttons = document.getElementsByTagName('button')
const buttonsArr = [...buttons]
buttonsArr.forEach((button)=>{
    button.disabled = 'true'
})
}
 if(four.innerHTML ==='x' && five.innerHTML ==='x' && six.innerHTML ==='x'){
    setResult('x')
    four.classList.add('green')
five.classList.add('green')
six.classList.add('green')
const buttons = document.getElementsByTagName('button')
const buttonsArr = [...buttons]
buttonsArr.forEach((button)=>{
    button.disabled = 'true'
})
 }  
if(seven.innerHTML ==='x' && eight.innerHTML ==='x' && nine.innerHTML ==='x'){
    seven.classList.add('green')
eight.classList.add('green')
nine.classList.add('green')
setResult('x')
const buttons = document.getElementsByTagName('button')
const buttonsArr = [...buttons]
buttonsArr.forEach((button)=>{
    button.disabled = 'true'
})
}
if(two.innerHTML ==='x' && five.innerHTML ==='x' && eight.innerHTML ==='x'){
    setResult('x')
    two.classList.add('green')
five.classList.add('green')
eight.classList.add('green')
const buttons = document.getElementsByTagName('button')
const buttonsArr = [...buttons]
buttonsArr.forEach((button)=>{
    button.disabled = 'true'
})
}
if(three.innerHTML ==='x' && six.innerHTML ==='x' && nine.innerHTML ==='x'){
    three.classList.add('green')
six.classList.add('green')
nine.classList.add('green')
setResult('x')
const buttons = document.getElementsByTagName('button')
const buttonsArr = [...buttons]
buttonsArr.forEach((button)=>{
    button.disabled = 'true'
})
}
if(one.innerHTML ==='x' && five.innerHTML ==='x' && nine.innerHTML ==='x'){
    one.classList.add('green')
    five.classList.add('green')
    nine.classList.add('green')
    setResult('x')
    const buttons = document.getElementsByTagName('button')
    const buttonsArr = [...buttons]
    buttonsArr.forEach((button)=>{
        button.disabled = 'true'
    })
}
if(three.innerHTML ==='x' && five.innerHTML ==='x' && seven.innerHTML ==='x'
){
    three.classList.add('green')
    five.classList.add('green')
    seven.classList.add('green')
    setResult('x')
    const buttons = document.getElementsByTagName('button')
    const buttonsArr = [...buttons]
    buttonsArr.forEach((button)=>{
        button.disabled = 'true'
    })
}
if(one.innerHTML ==='o' && two.innerHTML ==='o' && three.innerHTML ==='o'){
    setResult('o')
    one.classList.add('green')
    two.classList.add('green')
    three.classList.add('green')
    const buttons = document.getElementsByTagName('button')
    const buttonsArr = [...buttons]
    buttonsArr.forEach((button)=>{
        button.disabled = 'true'
    })
} 
if(one.innerHTML ==='o' && four.innerHTML ==='o' && seven.innerHTML==='o'){
    setResult('o')
    one.classList.add('green')
    four.classList.add('green')
    seven.classList.add('green')
    const buttons = document.getElementsByTagName('button')
    const buttonsArr = [...buttons]
    buttonsArr.forEach((button)=>{
        button.disabled = 'true'
    })
}
    if(four.innerHTML ==='o' && five.innerHTML ==='o' && six.innerHTML ==='o'){
        four.classList.add('green')
        five.classList.add('green')
        six.classList.add('green')
        setResult('o')
        const buttons = document.getElementsByTagName('button')
        const buttonsArr = [...buttons]
        buttonsArr.forEach((button)=>{
            button.disabled = 'true'
        })
    } 
if(seven.innerHTML ==='o' && eight.innerHTML ==='o' && nine.innerHTML ==='o'){
    setResult('o')
    seven.classList.add('green')
    eight.classList.add('green')
    nine.classList.add('green')
    const buttons = document.getElementsByTagName('button')
    const buttonsArr = [...buttons]
    buttonsArr.forEach((button)=>{
        button.disabled = 'true'
    })
}
if(two.innerHTML ==='o' && five.innerHTML ==='o' && eight.innerHTML ==='o'){
    setResult('o')
    five.classList.add('green')
    two.classList.add('green')
    eight.classList.add('green')
    const buttons = document.getElementsByTagName('button')
    const buttonsArr = [...buttons]
    buttonsArr.forEach((button)=>{
        button.disabled = 'true'
    })
}
if(three.innerHTML ==='o' && six.innerHTML ==='o' && nine.innerHTML ==='o'){
    setResult('o')
    nine.classList.add('green')
    six.classList.add('green')
    three.classList.add('green')
    const buttons = document.getElementsByTagName('button')
    const buttonsArr = [...buttons]
    buttonsArr.forEach((button)=>{
        button.disabled = 'true'})
}
if(one.innerHTML ==='o' && five.innerHTML ==='o' && nine.innerHTML ==='o'){
    setResult('o')
    one.classList.add('green')
    five.classList.add('green')
    nine.classList.add('green')
    const buttons = document.getElementsByTagName('button')
    const buttonsArr = [...buttons]
    buttonsArr.forEach((button)=>{
        button.disabled = 'true'})
}
if(three.innerHTML ==='o' && five.innerHTML ==='o' && seven.innerHTML ==='o'){
    setResult('o')
    three.classList.add('green')
    five.classList.add('green')
    seven.classList.add('green')
    const buttons = document.getElementsByTagName('button')
    const buttonsArr = [...buttons]
    buttonsArr.forEach((button)=>{
        button.disabled = 'true'
    })

}
    }



return(
    <div id="board"> 
      <button id="1" className="square" onClick = {handleClick}></button>
      <button id="2" className="square" onClick = {handleClick}></button>
      <button id="3" className="square" onClick = {handleClick}></button>
      <button id="4" className="square" onClick = {handleClick}></button>
      <button id="5" className="square" onClick = {handleClick}></button>
      <button id="6" className="square" onClick = {handleClick}></button>
      <button id="7" className="square" onClick = {handleClick}></button>
      <button id="8" className="square" onClick = {handleClick}></button>
      <button id="9" className="square" onClick = {handleClick}></button>
    </div>

)
}


