import { returnString } from "../../helpers/blocksToText"

export default {
  title: 'CTA Section',
  name: 'pageBuilderCta',
  type: 'object',
  fields: [
    {
      title: 'Theme',
      name: 'theme',
      type: 'string',
      options: {
        list: ['light', 'dark']
      },
      initialValue: 'light',
      description: 'Select a font colour theme.'
    },
    {
      title: 'Text',
      name: 'text',
      type: 'basicPortableText'
    },
    {
      title: 'Background Image',
      name: 'image',
      type: 'image'
    }
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare({ text }) {
      return {
        title: returnString(text),
        subtitle: 'CTA Section'
      }
    }
  },
}