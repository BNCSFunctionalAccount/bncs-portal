import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'binaryName',
      title: 'Binary Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    {
      title: "Type",
      description: "",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Driver", value: "driver" },
          { title: "Core", value: "core" },
          { title: "Automatic", value: "automatic" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },

    defineField({
      name: 'version',
      title: 'Version',
      type: 'string',
      
    }),defineField({
      name: 'lastSupportedBNCSVersion',
      title: 'Last Supported BNCS Version',
      type: 'string',
      
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      
    }),
    defineField({
      name: 'readMe',
      title: 'Read Me',
      type: 'boolean',
      
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'number'
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'text',
      rows: 1,
    }),
    defineField({
      name: 'roles',
      title: 'Roles',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'viewers',
      title: 'Viewers',
      type: 'array',
      of: [{type: 'string'}]
    }),
    {
      title: "License Type",
      description: "",
      name: "licenseType",
      type: "string",
      options: {
        list: [
          { title: "Perpetual", value: "perpetual" },
          { title: "Subscription", value: "subscription" },
          { title: "Option 3", value: "optionThree" },
        ],
      },
    },
    defineField({
      name: 'deviceManufacturer',
      title: 'Device',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'url',
      title: 'Download',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})