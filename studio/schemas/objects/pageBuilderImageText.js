export default {
  title: 'Text | Image Section',
  name: 'pageBuilderImageText',
  type: 'object',
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Image | Text Row', value: 'row' },
          { title: 'Text | Image Row', value: 'row-reverse' }, 
          { title: 'Image | Text Column', value: 'column' },
          { title: 'Text | Image Column', value: 'column-reverse'}
        ]
      },
      initialValue: 'row'
    },
    {
      title: 'Section Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'portableText'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'mainImage'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Text | Image Section'
      }
    }
  }
}