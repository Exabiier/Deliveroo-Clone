import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface  Restaurants {
    id: string | number,
    imgUrl: string | asset,
    title: string,
    rating: number | string,
    genre: string,
    address: string,
    short_description: string,
    dishes: string | dish[],
    long: number | string,
    lat: number | string,
    name: string,
}

interface InitialStateSlice {
    restaurant: Restaurants | null
}

const initialState: InitialStateSlice ={
    restaurant: null,
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action: PayloadAction<Restaurants> ) => {
            state.restaurant = action.payload
        },
  
}})

// this allows you to dispatch from any component so you can change the state of your redux from any component:
export const { setRestaurant } = restaurantSlice.actions;

// this allows you to get the data from your global state in redux:
export const selectRestaurant = (state: RootState) => state.restaurant.restaurant;

// this is how we connect the reducer to our store:
export default restaurantSlice.reducer;
