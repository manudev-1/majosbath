import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import  logo  from './assets/logo.svg'

import Button from './components/Button.jsx'
import LogoSidebar from './components/Logo-sidebar.jsx'

function App() {
  

  return (
    <>
    <div className="flex">
    <LogoSidebar/>
    <div className="w-4/5 h-screen items-center ml-auto mr-0 pt-[25vh] pl-96 pr-96">
      <h1 className="kadwa-regular items-center text-3xl pl-60">Benvenuto</h1>
      <br></br>
      <hr className=""></hr>
      <div className="pl-52">
      <Button text={"login"} className="kadwa-regular"/>
      <Button text={"signup"} className="kadwa-regular"/>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
