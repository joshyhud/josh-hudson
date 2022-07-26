export default {
  title: 'Text Section',
  name: 'pageBuilderTextSection',
  type: 'object',
  fields: [
    {
      title: 'Section Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Text',
      name: 'text',
      type: 'portableText'
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Text Section'
      }
    }
  },
}