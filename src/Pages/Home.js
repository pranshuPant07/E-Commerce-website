import React from 'react' 
import Carousel from '../Components/Carousel'
import Promise from '../Components/Promise'
import Category from '../Components/Category'
import Products from '../Components/Products'

function Home() {
  return (
    <>
      <Carousel />
      <Promise />
      <Category />
      <Products />
    </>
  )
}

export default Home