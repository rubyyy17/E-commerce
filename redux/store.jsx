import  { configureStore } from '@reduxjs/toolkit'
import  appReduser  from '../redux/slice/appSlice'
import  productReduser  from '../redux/slice/productSlice'
import basketReduser from '../redux/slice/Sepettslice'

export const store = configureStore({
  reducer: {

    app:appReduser,
    product:productReduser,
    sepet:basketReduser
  }
})