
   
import bcp47 from 'bcp47'

export default {
  title: 'Global Settings',
  name: 'globalSettings',
  type: 'document',
  fields: [
    {
      title: 'Homepage',
      name: 'homepage',
      type: 'reference',
      to: {type: 'page'}
    },
    {
      title: 'Site title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical urls.',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: '3',
      description:
        'A generic site description. Used as a fallback for pages without a unique description.',
      validation: Rule =>
        Rule.required()
          .max(155)
          .warning(
            'Description too long. Optimal length is 155 characters or less.'
          ),
    },
    {
      title: 'Site language',
      name: 'lang',
      type: 'string',
      description: 'Should be a valid bcp47 language code like en or en-US',
      defaultValue: 'en',
      validation: Rule =>
        Rule.custom(lang =>
          bcp47.parse(lang) ? true : 'Please use a valid bcp47 code'
        ),
    },
    {
      title: 'Open Graph Image',
      name: 'ogImage',
      type: 'image',
      description:
        'A generic open graph image to be used as a fallback for pages without a unique open graph image.',
      validation: Rule => Rule.required(),
    },
  ],
}