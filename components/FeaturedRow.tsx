import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'


type Props = {
    id: string
    title: string;
    description: string;
    FeaturedCategories?: string 
}

const FeaturedRow = ({title, description, FeaturedCategories, id}: Props) => {
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
      showsVerticalScrollIndicator={false}
      className='pt-4'
      >
        {/* Restraunt Cards */}
        

      </ScrollView>
    </View>
  )
}

export default FeaturedRow