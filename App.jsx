import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './component/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './component/Loading'
import Drawer from '@mui/material/Drawer';
import { useSelector,useDispatch } from 'react-redux'
import { calculatesepet, removeItemSepet, setDrawer } from './redux/slice/Sepettslice'


function App() {
    const dispatch=useDispatch();
    const {products,drawer,totalAmoun,}=useSelector((store)=>store.sepet)
    const {selectedProduct}=useSelector((store)=>store.product)
    const {id,price,image,title,description,count}=selectedProduct;
    
    

    useEffect(()=>{
      dispatch(calculatesepet());
    },[])

    const RemoveFromBasket=()=>{
      const payload={
          id:id,
          price,
          image,
          title,
          description,
          count
          

      }
      dispatch(removeItemSepet(payload));
      dispatch(calculatesepet());
  }
 



  return (
    <div>
    <PageContainer>
      
      <Header/>
      <RouterConfig/>
      <Loading/>
      <Drawer anchor={'right'} open={drawer} onClose={()=>dispatch(setDrawer())} >
        {
          products && products.map((product)=>{
            return(
          <div key={product.id}>
          <div className='sepet'>
            <img style={{marginRight:"10px"}} src={product.image} width={50} height={50} alt="" />
            <p className='sepetTitle'>{product.title}    ({product.count})</p>
            
            <p style={{marginRight:"20px", }}>{product.price} $</p>
            <button onClick={RemoveFromBasket} className='sepetremove'>remove</button>
          </div>



          

          
          </div>
            )
          })
        }
        <div>
        <h2 style={{marginLeft:"10px"}}>Total Amount:  {totalAmoun.toFixed(2)} $</h2>
        <button style={{color:"#fff"}} className='sepetremove'>Pay</button>
        </div>
      </Drawer>
    </PageContainer>
    </div>
  )
}

export default App
