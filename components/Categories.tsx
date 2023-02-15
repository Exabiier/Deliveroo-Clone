import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoriesCard from './CategoriesCard'
import client, { urlFor } from '../Sanity';
import category from '../sanityy/schemas/category';



const Categories = () => {
  const [categories, setCategories] = useState<category[]>([]);

    useEffect(()=>{
      client.fetch(
        `*[_type == "category"]`
      ).then(data => {
        setCategories(data)
      })

    },[])

  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        {/* Categoties Card */}

        {categories.map((category: category)=>(
            <CategoriesCard 
            key={category._id}
            imgUrl={urlFor(category.image).url()}
            title={category.name}
            />
        )
        )}
    </ScrollView>
  )
}

export default Categories