// this it the types for our RootStack and Navigation
type RootStackParamList = {
    Home: undefined;
    Restaurant: undefined
};

type RestaurantScreenNavigationProp = NavigationProp<RootStackParamList, 'Restaurant'>

type RestaurantScreenRouteProp = RouteProp<RootStackParamList, 'Restaurant'>

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



