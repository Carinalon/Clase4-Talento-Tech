import React from 'react'

function Productos({productos, addToCart}) {
  return (
    <div>
      <span>{productos.name} = ${productos.price}</span>
      <button onClick={() => addToCart(productos)}>Agregar</button>
    </div>
  )
}

export default Productos
