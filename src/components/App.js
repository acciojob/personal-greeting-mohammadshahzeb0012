import { useState } from "react"
import React from "react";
import './../styles/App.css';

const App = () => {
  const [greet, setGreet] = useState('');;
  const inputHandel = (inputVal) => {
      { inputVal === '' ? setGreet('') : setGreet('Hello' + ' ' + inputVal +'!') }
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="nameInput">Enter your name:</label><br />
        <input onChange={(e) => inputHandel(e.target.value)} id="nameInput" type="text" />
        <p>{greet}</p>
    </div>
  )
}

export default App
