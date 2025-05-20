import React from 'react'
import Productos from './Productos'

function ProductList({productos, addToCart}) {
  return (
    <div>
      {productos.map((productos) => (
        <Productos productos={productos} addToCart={addToCart}/>
      ))}
    </div>
  )
}

export default ProductList
