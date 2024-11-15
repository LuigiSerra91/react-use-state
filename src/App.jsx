import { useState } from 'react'
import data from './data/languages.js'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  const [active, setActive] = useState(0)

  function handleClick(e){
    console.log(active);
    const newActive = Number(e.target.getAttribute('data-index'))
    console.log(newActive);
    setActive(newActive)

  }

  return (
    <>
      
    </>
  )
}

export default App
