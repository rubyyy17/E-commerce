import { createSlice } from '@reduxjs/toolkit'

const getBasketFromStorage=()=>{
    if(localStorage.getItem("basket")){
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];

}

const initialState={
    products:getBasketFromStorage(),
    drawer:false,
    totalAmoun:0
}

const writeFromBasketToStorage=(sepet)=>{
    localStorage.setItem("basket",JSON.stringify(sepet));
    
}
const removeFrombasketToStorage=()=>{
    localStorage.removeItem("basket")
}




export const Sepettslice=createSlice({
    name:"basket",
    initialState,
    reducers:{
        addToBasket:(state,action)=>{
          const findProduct = state.products && state.products.find((product)=> product.id === action.payload.id);
          
          if(findProduct){
            //daha once eklendi
            const extractedProducts=state.products.filter((product)=>product.id !== action.payload.id);
            findProduct.count +=action.payload.count;
            state.products=[...extractedProducts,findProduct];
            writeFromBasketToStorage(state.products);
            
          }else{
            state.products=[...state.products,action.payload];
            writeFromBasketToStorage(state.products);
            
          }
        },
        setDrawer:(state)=>{
            state.drawer=!state.drawer;
        },
        calculatesepet:(state)=>{
            state.totalAmoun=0;
            state.products&&state.products.map((product)=>{
                state.totalAmoun+=product.price*product.count;
            })
        },
        removeItemSepet:(state,action)=>{
            
          
            
            const yuh=state.products.filter((product)=>product.id !== action.payload.id)
            state.products=yuh
            
            writeFromBasketToStorage(state.products)
            
            
            
           
            
            

        }

    }
})


export const { addToBasket,setDrawer ,calculatesepet,removeItemSepet} = Sepettslice.actions

export default Sepettslice.reducer