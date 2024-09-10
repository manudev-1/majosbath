import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import  logo  from './assets/logo.svg'

import Button from './components/Button.jsx'

function App() {
  

  return (
    <>
    <div className="mega-box">
    <div className="box">
      <img src={logo} alt="logo" className="logo-homepage"/>
      <h1 className="kadwa-bold">Majo's Bath</h1>
      <p className="kadwa-regular">Review dei cessi del Majorana</p>
    </div>
    <div className="box-big">
      <h1 className="kadwa-regular">Benvenuto</h1>
      <br></br>
      <hr></hr>
      <Button text={"login"} className="kadwa-regular"/>
      <Button text={"signup"} className="kadwa-regular"/>
    </div>
    </div>
    </>
  )
}

export default App
