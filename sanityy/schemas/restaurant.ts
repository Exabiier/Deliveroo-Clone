import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: "Restaurant name",
        validation: (Rule) => Rule.required(),
      }),

    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),

    defineField({
      name: 'image',
      title: 'Image of the Restraunt',
      type: 'image', 
    }),


    defineField({
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',
      
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the Restraurant',
      type: 'number',
    }),

    defineField({
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'rating',
      title: 'Enter a Rating from (1-5 Starts)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error('Please enter a number between 1-5'),
    }),

    //this is how you connect your input from you Categories to your Restraunt
    defineField({
      name: 'category',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: 'category'}]
    }),

    // this is how you connect your dishes to you restruant
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{ type: 'reference', to: [{ type: 'dish'}]}]
    }),

  ],
})
