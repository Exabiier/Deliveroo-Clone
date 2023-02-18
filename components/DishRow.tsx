import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Dinero from 'dinero.js'
import { urlFor } from '../Sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItems,  } from '../features/basketSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const DishRow = ({id, name, description, price, image}: BasketDispatch) => {

    const items = useSelector(selectBasketItems);
    const BasketItemArray = items.filter((item)=> {return item.id === id})
    const dispatch = useDispatch();

    // these are the Dispatches for the Bakset
    const addItemToBasket = () => {
        dispatch(addToBasket({id, name, description, price, image}))
    }

    const removeItemsFromBasket = () => {
        if ( BasketItemArray.length < 1 ) {return;} else{
            dispatch(removeFromBasket({id}))
        }  
    }
    const [ isPressed, setIsPressed ] = useState<boolean>(false);

//  Dinero.js is used for currany convertion of money values from the backend
    const Din = Dinero;
    const prices = Din({amount: price * 100, currency: "USD"}).toFormat('$0,0.00');

  return (
    <>
    <TouchableOpacity onPress={()=> setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
        <View className="flex-row">

            <View className="flex-1 pr-2">
                <Text className="text-lg mb-1">{name}</Text>
                <Text className="text-gray-400">{description}</Text>
                <Text className="text-gray-400 mt-2">{prices}</Text>
            </View> 

            <View >
                <Image
                style={{
                borderWidth: 1,
                borderColor: "#F3F3F4"
                }}
                source={{uri: urlFor(image).url()}}
                className="h-20 w-20 bg-gray-300 p-4" />
            </View>
        </View>
    </TouchableOpacity>

    {isPressed && (
        <View className="bg-white px-4">
            <View className="flex-row items-center space-x-2 pb-3">
                
                <TouchableOpacity disabled={!BasketItemArray.length} onPress={removeItemsFromBasket}>
                    <MinusCircleIcon color={(BasketItemArray.length) > 0 ?"#00CCBB": "grey"} size={40} />    
                </TouchableOpacity>

                <Text>{BasketItemArray.length}</Text>

                <TouchableOpacity onPress={addItemToBasket}>
                    <PlusCircleIcon color="#00CCBB" size={40} />
                </TouchableOpacity>

            </View>
        </View>
    )}
    </>
  )
}

export default DishRow