import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slice/productSlice';
import '../Css/ProductDetails.css'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { addToBasket, calculatesepet } from '../redux/slice/Sepettslice';


function ProductDetails() {
    const {id}=useParams();
    const {products,selectedProduct}=useSelector((store)=>store.product)
    const {price,image,title,description}=selectedProduct;
    
    const [count,setCount]=useState(0);

    const dispatch=useDispatch();
    
    const increment=()=>{
        
        setCount(count+1);
    }

    const decrement=()=>{
        if(count<=0){
            setCount(count)
        }else{
        setCount(count-1);
        }
    }
    

    const addBasket=()=>{
        const payload={
            id,
            price,
            image,
            title,
            description,
            count
            

        }
        dispatch(addToBasket(payload));
        dispatch(calculatesepet());
    }

    useEffect(()=>{
        getProductById();
    },[])

    const getProductById=()=>{
        products && products.map((product)=>{
            if(product.id==id){
                dispatch(setSelectedProduct(product));
            }
        })
    }

  return (
    <div className='Details'>
        <div >
        <img className='imageDetails' src={image} alt="" />
        </div>
        <div>
            <h1>{title}</h1>
            <h3 className='h3description'>{description}</h3>
            <h1 className='price'>{price} $</h1>
            <div className='countdzayn'>
            <FaMinus onClick={decrement} className='icon1'/>
            <div className='row2'>
            <span className='icon2'>{count}</span>
            </div>
            <FaPlus onClick={increment} className='icon3'/>
            </div>
            <div>
                <button onClick={addBasket}
                className='DetailsButton'>Add Basket</button>
            </div>
        </div>
        
    </div>
  )
}

export default ProductDetails