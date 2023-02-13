import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider, useTailwind } from 'tailwind-rn/dist';
import HomeScreen from './screens/HomeScreen';



const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}