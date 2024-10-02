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
      title: 'Type',
      description: '',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Driver', value: 'driver' },
          { title: 'Core', value: 'core' },
          { title: 'Automatic', value: 'automatic' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    defineField({
      name: 'version',
      title: 'Version',
      type: 'string',
    }),
    defineField({
      name: 'lastSupportedBNCSVersion',
      title: 'Last Supported BNCS Version',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      type: 'text',
      rows: 7,
    }),
    defineField({
      name: 'readMe',
      title: 'Read Me',
      type: 'boolean',
    }),
    defineField({
      name: 'releaseNotes',
      title: 'Release Notes',
      type: 'text',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'text',
    }),
    defineField({
      name: 'organisationsWithLicenses',
      title: 'Organisations with Licenses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'organisation',
              title: 'Organisation',
              type: 'string',
              options: {
                list: [
                  { title: 'BBC', value: 'BBC' },
                  { title: 'Bloomberg', value: 'Bloomberg' },
                  { title: 'Discovery', value: 'Discovery' },
                  { title: 'IMG', value: 'IMG' },
                  { title: 'Sky', value: 'Sky' },
                ],
              },
            },
            {
              name: 'licenseType',
              title: 'License Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Subscription', value: 'subscription' },
                  { title: 'Perpetual', value: 'perpetual' },
                  { title: 'Trial', value: 'trial' },
                ],
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'roles',
      title: 'Roles',
      type: 'array',
      options: {
        list: [
          { title: 'BBC', value: 'BBC' },
          { title: 'Bloomberg', value: 'Bloomberg' },
          { title: 'Discovery', value: 'Discovery' },
          { title: 'IMG', value: 'IMG' },
          { title: 'Sky', value: 'Sky' },
        ],
      },
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'commerciallyAvailable',
      title: 'Commercially Available',
      type: 'boolean',
    }),

    defineField({
      name: 'deviceManufacturer',
      title: 'Device',
      type: 'array',
      of: [{ type: 'string' }],
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
