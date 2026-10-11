import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter ] =useState(5)

  // let counter =5

  const addValue =() =>{
    
    // if(counter>19){
    //   counter=counter
    // }
    // else{
    //   counter=counter+1
    // }

    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    
    // console.log("clicked",counter);
    
  }

  const removeValue =() =>{
    // if(counter>0){
    //   counter=counter-1;
    // }else{
    //   counter=counter;
    // }
    setCounter(counter-1)
  }
  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value:{counter}</h2>

    <button
    onClick={addValue}
    >
      Add Value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >remove value {counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
