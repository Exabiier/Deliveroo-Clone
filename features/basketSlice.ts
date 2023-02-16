import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface initialState {
    items: [] | dish[]
}

const initialState: initialState ={
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action: PayloadAction<dish> ) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action ) => {
           
        },
      
    },
})

// this allows you to dispatch from any component so you can change the state of your redux from any component:
export const { addToBasket, removeFromBasket } = basketSlice.actions

// this allows you to get the data from your global state in redux:
export const selectBasketItems = (state: RootState) => state.basket.items

// this is how 
export default basketSlice.reducer;
