import type { CollectionConfig } from 'payload'

export const Stats: CollectionConfig = {
  slug: 'stats',
  admin: {
    useAsTitle: 'value',
    defaultColumns: ['value', 'label', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'value',
      type: 'text',
      required: true,
    },
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
