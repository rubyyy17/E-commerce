import React from 'react'
import '../Css/Product.css'
import {useNavigate} from 'react-router-dom'

function Product({product}) {
  const {id,price,image,title,description}=product;
    
  const navigate= useNavigate();
  return (
    <div className='card'>
      <div className='imageP'>
      <img className='image' src={image} alt="" />
      </div>
      <div className='text'>
        <p className='title'>{title}</p>
        <h3 style={{marginTop:'50px', color:'salmon'}}>{price} $</h3>
        <button onClick={()=>navigate("/product-details/"+id)} className='Details-button'>Details</button>
      </div>
    </div>
  )
}

export default Product