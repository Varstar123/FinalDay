import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path= "/Add" element={<Add/>}></Route>
        <Route path= "/view" element={<View/>}></Route>
      </Routes>

    </>
  )
}

export default App
