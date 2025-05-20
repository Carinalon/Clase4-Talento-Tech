import React from 'react'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Main from '../Components/Main'
import {productsList} from '../utils/data'
import ProductList from '../Components/ProductList'
import Carrito from '../Components/Carrito'

const Home = ({carrito, handleAddToCart}) => {
    const countItem = carrito.length
  return (
    <>
      <Header/>
      <Nav countItem={countItem}/>
      <Main />
      <ProductList productos={productsList} addToCart={handleAddToCart}/>
      <Carrito cartItems={carrito}/>
      <Footer/>
      
     
    </>
  )
}

export default Home
