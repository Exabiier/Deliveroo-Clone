import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface BasketDispatchs {
    id: string,
    name: string,
    description: string,
    price: number,
    image: asset,
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

             const index = state.items.findIndex((item)=> item.id === action.payload.id);
             
             let newBasket = [...state.items];

             if(index >=0){
                newBasket.splice( index, 1);
             } else {
                console.warn(
                    `cant remove product (id: ${action.payload.id})`
                )
             }

             state.items = newBasket
        },
    },
})

// this allows you to dispatch from any component so you can change the state of your redux from any component:
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// this allows you to get the data from your global state in redux:
export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketItemsWithId = (state: RootState, id: string) => {state.basket.items.filter((item)=> item.id === id)}

export const selectBasketTotal = ( state: RootState ) =>  state.basket.items.reduce((total, item ) => total += item.price, 0)

// this is how we connect the reducer to our store:
export default basketSlice.reducer;
