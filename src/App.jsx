import React from 'react'
import { useState } from 'react'
import './App.css'
import Home from './Layouts/Home.jsx'



function App() {
  const [carrito, setCarrito] = useState([])

  const handleAddToCart = (productos) => {
    setCarrito([...carrito, productos])
  }
  
  return (
    <>
      <Home carrito={carrito} handleAddToCart={handleAddToCart}/>
      
    </>
  )
}

export default App
