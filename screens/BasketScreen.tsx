import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../features/RestaurantSlice';
import { useSelector } from 'react-redux';
import { BasketDispatchs, removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useDispatch } from 'react-redux';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../Sanity';
import Dinero from 'dinero.js';

// TODO make notes on the Object.entries() method

const BasketScreen = () => {
    const navigation = useNavigation<OrderScreenNavigationProp>();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const [ groupedItemsInBasket, setGroupedItemsInBasket] = useState<GroupedItems>({})
    const dispatch = useDispatch();

    useEffect(() => {
      const groupedItems = items.reduce((results: GroupedItems, item) => {
        (results[item.id] = results[item.id] || []).push(item);
        return results;   
      }, {})
      setGroupedItemsInBasket(groupedItems)
    }, [items])

    
    // Dinero object
    const Din = Dinero;

    // Callback Function for  total amount in basket
    const totalCost = (total: number) => {
      if (!total || typeof total !== "number") {
        return "$0.00";
      }
      let prices = Din({ amount: total * 100, currency: "USD" }).toFormat("$0,0.00");
      return prices;
    };

    // CallBack function for calculating bothe Delivery and subtotal:
    const totalCostAll = (total: number) => {
      if (!total || typeof total !== "number") {
        return "0.00";
      }
      let prices = Din({ amount: total * 100, currency: "USD" }).toFormat("0,0.00");
      return prices;
    };

    // Call back function for every individual Basket item
    const priceOfItem = (price : number) => {
      if (isNaN(price)) {
        return "0.00";
      } else {
        const priceOfItems = Din({amount: price * 100, currency: "USD"}).toFormat('$0,0.00');
        return priceOfItems;
      }
    }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">

        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack}
          className="rounded-full bg-gray-100 absolute top-3 right-5">
          <XCircleIcon color="#00CCBB" height={50} width={50}/>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>

            <Text className="flex-1">Deliver in 50-75 min</Text>
            <TouchableOpacity>
              <Text className='text-[#00CCBB]'>Change</Text>
            </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items])=>(
            <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
              <Text className="text-[#00CCBB]">
                {items.length} x
              </Text>
              <Image
              source={{
                uri: urlFor(items[0]?.image).url()
              }}
              className="h-12 w-12 rounded-full"/>
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                {priceOfItem(items[0]?.price)}
              </Text>
              <TouchableOpacity onPress={() => dispatch(removeFromBasket({id: key}))}>
                <Text className='text-[#00CCBB] text-xs'>Remove</Text>
              </TouchableOpacity>

            </View>

          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal: </Text>
            <Text className="text-gray-400" >{totalCost(basketTotal)}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee: </Text>
            <Text className="text-gray-400" >{items.length > 0 ? totalCost(599/100): "$0.00"}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text >Order Total: </Text>
            <Text className="font-extrabold" >${(parseFloat(totalCostAll(basketTotal)) + (items.length > 0 ? parseFloat(totalCostAll(599/100)): 0.00)).toFixed(2)}</Text>
          </View>

          <TouchableOpacity disabled={items.length < 1 } onPress={() =>navigation.navigate("OrderScreen")} className={items.length > 0 ? "rounded-lg  bg-[#00CCBB] p-4" : "rounded-lg  bg-gray-400 p-4"}>
          <Text className="text-center text-white text-lg font-bold">Place Order</Text>
          </TouchableOpacity>

        </View>



        

      </View>
    </SafeAreaView>
  )
}

export default BasketScreen