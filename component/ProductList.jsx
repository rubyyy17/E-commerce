import React, { useEffect } from 'react'
import { getAllProducs } from '../redux/slice/productSlice';
import {useDispatch,useSelector} from 'react-redux'
import Product from './Product';
import '../Css/Product.css'


function ProductList() {
    const dispatch=useDispatch();
    
    const {products}=useSelector((store)=>store.product);

    useEffect(()=>{
        dispatch(getAllProducs())
    },[]

    )
  return (
    <div className='cards'>
      {
        products && products.map((product)=>(
          <Product key={product.id} product={product}/> 
        ))
        
      }
    </div>
  )
}

export default ProductList