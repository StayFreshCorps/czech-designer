import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'featured', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'client',
      type: 'text',
      required: true,
    },
    {
      name: 'outcome',
      type: 'textarea',
      required: true,
      admin: {
        description: 'One sentence with a number.',
      },
    },
    {
      name: 'tags',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Brand', value: 'Brand' },
        { label: 'Print', value: 'Print' },
        { label: 'AI', value: 'AI' },
        { label: 'Packaging', value: 'Packaging' },
        { label: 'Campaign', value: 'Campaign' },
        { label: 'Identity', value: 'Identity' },
      ],
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
        description: 'Show on the homepage.',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
