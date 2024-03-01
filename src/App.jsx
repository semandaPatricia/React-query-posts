import { useState } from 'react'

import './App.css'
import Home from './pages/Home/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Home/>
  )
}

export default App
