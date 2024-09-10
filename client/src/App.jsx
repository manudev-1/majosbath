import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import  logo  from './assets/logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="box">
      <img src={logo} alt="logo" className="logo-homepage"/>
      <h1 className="kadwa-bold">Majo's Bath</h1>
      <p className="kadwa-regular">Review dei cessi del Majorana</p>
    </div>
    </>
  )
}

export default App
