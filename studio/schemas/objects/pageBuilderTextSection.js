export default {
  title: 'Text Section',
  name: 'pageBuilderTextSection',
  type: 'object',
  fields: [
    {
      title: 'Section Title',
      name: 'sectionTitle',
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
      title: 'sectionTitle',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Text Section'
      }
    }
  },
}