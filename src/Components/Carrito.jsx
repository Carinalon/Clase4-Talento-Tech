import React from 'react'

function Carrito({cartItems}) {
  return (
    <div>
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (<p>El carrito esta vacío</p>) :
      (<ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>)}
    </div>
  )
}

export default Carrito
