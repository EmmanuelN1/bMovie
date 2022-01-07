import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[],
    subscribe: false,
    
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        //Actions
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload];
        },

        onSubscribe: (state, action) => {
            state.subscribe = [state.subscribe, action.payload]
        },
        emptyBasket: (state, action) => {
            state.items = []
        }

    }
}); 

export const { addToBasket, onSubscribe, emptyBasket } = basketSlice.actions

//Selector - This is how we pull information from the Global store slice

export const selectItems = (state) => state.basket.items;  
export const selectSubscribe = (state) => state.basket.subscribe;


export default basketSlice.reducer

