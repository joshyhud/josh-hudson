export default {
  title: 'Grid Section',
  name: 'pageBuilderGrid',
  type: 'object',
  fields: [
    {
      title: 'Section Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Intro',
      name: 'intro',
      type: 'portableText'
    },
    {
      title: 'Grid Items',
      name: 'gridItems',
      type: 'array',
      of: [{ type: 'textItem' }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Grid Section'
      }
    }
  }
}