import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from "@sanity/client";
import client from '../Sanity';
import Featured from '../sanityy/schemas/featured';



const HomeScreen = () => {
    const navigation = useNavigation();
    const [ featuredCategories, setFeaturedCategories ] = useState<Featured[]>([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    },[])

    useEffect(()=>{
        //@ts-ignore - sanityClient. fetch does not have a type:
        client.fetch(` 
        *[_type == "featured"] {
            ...,
            restaurants[] -> {
                ...,
                dishes[] ->
            }
        }`).then((data: Featured[] )=>{
            setFeaturedCategories(data)
        })

        
    }, [client])

  return (
    <SafeAreaView className='bg-white pt-5' >
        
            <View className='flex-row pb-3 items-center mx-4 space-x-2 '>
                <Image source={{
                    uri: "https://links.papareact.com/wru"
                }}
                className='h-7 w-7 bg-gray-300 p-4 rounded-full' />

                <View className='flex-1'>
                    <Text>Deliver Now!</Text>
                    <Text className='font-bold text-xl'>Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View> 

                <UserIcon size={35} color="#00CCBB" />
            </View>

            {/* Search Section */}

            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3 '>
                    <MagnifyingGlassIcon  color="gray" size={20} />
                    <TextInput
                    placeholder='Restaurants and cuisines'
                    keyboardType='default'
                    />
                </View>

                <AdjustmentsVerticalIcon color='#00CCBB' />
            </View>

            {/* Body */}
            <ScrollView className='bg-gray-100'
            contentContainerStyle={{
                paddingBottom: 100,
            }}>

                {/* Catigories */}
                <Categories />

                {featuredCategories?.map((category: Featured, index: number) => (<><FeaturedRow
                    key={`${category._id}-${index}`}
                    id={category._id}
                    title={category.name}
                    description="Paid placement form our partners"
                     /></>))}



            </ScrollView>

    </SafeAreaView>
      
    
  )
}

export default HomeScreen