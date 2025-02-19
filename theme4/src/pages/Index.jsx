import React from 'react'
import Home from '../components/index/Home'
import Promo from '../components/index/Promo'
import Product from '../components/index/Product'
import Extra from '../components/index/Extra'
import Gallery from '../components/index/Gallery'
import Testimonials from '../components/index/Testimonials'
import Newsletter from '../components/index/Newsletter'
function Index() {
  return (
    <div>
        <Home/>
        <Promo/>
        <Product/>
        <Extra/>
        <Gallery/>
        <Testimonials/>
        <Newsletter/>
    </div>
  )
}

export default Index
