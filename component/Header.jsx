import React, { useState } from 'react'
import '../Css/Header.css'
import { BsBasket3 } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import {useNavigate} from "react-router-dom"
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/store';
import { setDrawer } from '../redux/slice/Sepettslice';

function Header() {
    const [theme,setTheme]=useState(true);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {products}=useSelector((store)=>store.sepet)
    

    const changeTheme=()=>{
        const root= document.getElementById("root");
        setTheme(!theme);
        if(theme){
            root.style.backgroundColor="black";
            root.style.color="white";
        }else{
            root.style.backgroundColor="white";
            root.style.color="black"
        }

    }
  return (
    <div className='between'>
        <div className='column'>
            <img onClick={()=>navigate('/')} className='logo' src="./src/picture/asd.jpg" alt="" />
            <p className='logoText'>CAGLAR LTD.</p>
        </div>
        <div className='row'>
            <input value={products} onChange={(e)=>(e.target.value)} className='input' type="text" placeholder='Search' />
            <div>
                {theme ? <FaMoon className='icon' onClick={changeTheme}/> :<IoSunnyOutline className='icon' onClick={changeTheme}/> }
                <Badge onClick={()=>dispatch(setDrawer())} badgeContent={products.length} color="primary">
                <BsBasket3 className='icon'/>
                </Badge>
            
            
            
            </div>
        </div>
    </div>
  )
}

export default Header