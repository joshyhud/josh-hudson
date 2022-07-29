export default {
  title: 'Navigation Link',
  name: 'navigationLink',
  type: 'object', 
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string'
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: Rule => Rule.uri({ allowRelative: true }).required(),
    }
  ]
}