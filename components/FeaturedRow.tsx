import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestrauntCard from './RestrauntCard'
import client from '../Sanity'

type Props = {
    id: string
    title: string;
    description: string;
    FeaturedCategories?: string 
}

const FeaturedRow = ({title, description, FeaturedCategories, id}: Props) => {
    const [restaurants, setRestaurants] = useState<RestaurantResponse[]>([]);


  useEffect(()=>{
    client.fetch(`
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[] -> {
          ...,
          dishes[] ->,
          category->{...}
      }
  }[0]`,
     { id }).then(data => {
      data ? setRestaurants(data.restaurants) : "";
     })
  },[id])

  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15
      }}
      showsHorizontalScrollIndicator={false}
      className='pt-4'
      >

        {restaurants?.map((restaurant) =>(
          <RestrauntCard
          key={restaurant._id}
          id={restaurant._id}
          imgUrl={restaurant.image}
          title={restaurant.name}
          rating={restaurant.rating}
          genre={restaurant?.category.name}
          address={restaurant.address}
          short_description={restaurant.short_description}
          dishes={restaurant.dishes}
          long={restaurant?.long}
          lat={restaurant?.lat}
          name={restaurant.name}
          />
        ))}
        {/* Restraunt Cards */}


        {/* <RestrauntCard
        id={123}
        imgUrl='https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
        title="Yo! sushi"
        rating={4.5}
        genre='Japanes'
        address='123 Main St'
        short_description='This is a Test description'
        dishes={[]}
        long={20}
        lat={0}
        />

        <RestrauntCard
        id={123}
        imgUrl='https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80'
        title="Yo! sushi"
        rating={4.5}
        genre='Japanes'
        address='123 Main St'
        short_description='This is a Test description'
        dishes={[]}
        long={20}
        lat={0}
        /> */}

      </ScrollView>
    </View>
  )
}

export default FeaturedRow