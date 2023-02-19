import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider, useTailwind } from 'tailwind-rn/dist';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import {store} from './store';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';

// todo We nee to change the adresses for our app
// TODO We need to Make sure that we make that Dinero does not act up when that basket is empty
// TODO we need to make sure that we say that there is no item in the basket when there is no food in basket
// TODO We need to change the name length of RedRobin so it fits thew screen 


const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Basket" component={BasketScreen} options={{presentation: 'modal', headerShown: false}} />
            <Stack.Screen name="OrderScreen" component={PreparingOrderScreen} options={{ presentation: "fullScreenModal", headerShown: false}}/>
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}