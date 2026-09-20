import type { GlobalConfig } from 'payload'

export const Site: GlobalConfig = {
  slug: 'site',
  label: 'Site settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'headline',
      type: 'textarea',
      required: true,
    },
    {
      name: 'subheadline',
      type: 'text',
      required: true,
    },
    {
      name: 'about',
      type: 'textarea',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'linkedin',
      type: 'text',
      required: true,
    },
    {
      name: 'openToWork',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'availabilityNote',
      type: 'text',
      required: true,
    },
  ],
}
