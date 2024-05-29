import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Homee from '../pages/Homee'
import ProductDetails from '../component/ProductDetails'


function RouterConfig() {
  return (
    <Routes>
        <Route path='/' element = {<Homee/>} />
        <Route path='/product-details/:id' element = {<ProductDetails/>} />
    </Routes>
  )
}

export default RouterConfig