import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface BasketDispatchs {
    id: string,
    name: string,
    description: string
    price: number
    image: asset
}

interface InitialStateSlice {
    items: BasketDispatchs[]
}

const initialState: InitialStateSlice ={
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action: PayloadAction<BasketDispatchs> ) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action ) => {       
        },
    },
})

// this allows you to dispatch from any component so you can change the state of your redux from any component:
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// this allows you to get the data from your global state in redux:
export const selectBasketItems = (state: RootState) => state.basket.items;

// this is how we connect the reducer to our store:
export default basketSlice.reducer;
