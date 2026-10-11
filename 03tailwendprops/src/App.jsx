import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // let myObj={
  //   username:"sumit",
  //   age:21
  // }

  // let newArray = [1,2,3,4]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4  rounded-xl mb-4' >Tailwend test</h1>
    <Card username="sumit_Kumar" btnText="click me" />
    <Card username="sumit_Anand"  btnText="don't click me"/>
    </>
  )
}
export default App
