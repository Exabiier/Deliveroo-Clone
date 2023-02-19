// this it the types for our RootStack and Navigation
type RootStackParamList = {
    Home: undefined;
    Restaurant: undefined;
    Basket: undefined;
    OrderScreen: undefined;
    Delivery: undefined;
};

type RestaurantScreenNavigationProp = NavigationProp<RootStackParamList, 'Restaurant'>

type RestaurantScreenRouteProp = RouteProp<RootStackParamList, 'Restaurant'>

type BasketScreenNavigationProp = NavigationProp<RootStackParamList, 'Basket'>

type OrderScreenNavigationProp = NavigationProp<RootStackParamList, "OrderScreen">

type DeliveryScreenNavigationProp = NavigationProp<RootStackParamList, 'Delivery'>

type HomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>


// this is for the Restraunt type
type Restraunt = {
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

////////////////////////
/// API Call Types ///
//////////////////////

//  all the types for dish and Dish type:
type asset = {
    _ref: string,
    _type: string
}

type dish = {
    image: asset,
    name: string,
    price: number,
    short_description: string,
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string,
}

type DishCheckOut = {
    description: string, 
    id: string,
    image: { asset: asset , _type?: string},
    name: string,
    price: number
}

type GroupedItems = Record<string, BasketDispatch[]>

// The type for restraunts:
type category = { 
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string
    image:{ _type: string, asset: asset}
    name: string
}

type RestaurantResponse = {
    address: string,
    dishes: dish[],
    image: asset,
    lat: number,
    long: number
    name: string,
    category: category,
    rating: number,
    short_description: string,
    type: {_ref: string , _type: string },
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string,
}

// Featured type:

type Featured = {
    name: string
    restraunts: RestaurantResponse[],
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string,
}

/////////////////////////
///    Redux Types   ///
///////////////////////

type BasketDispatch = {
    id: string,
    name: string,
    description: string,
    price: number,
    image: asset,
}

type BasketDispatchAdd = {
    id: string,
    name: string,
    description: string,
    price: number,
    image: asset,
}

