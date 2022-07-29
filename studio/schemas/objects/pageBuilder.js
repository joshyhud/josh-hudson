export default {
  title: 'Page Builder',
  name: 'pageBuilder',
  type: 'array',
  of: [
    {
      title: 'Text Section',
      name: 'pageBuilderText',
      type: 'pageBuilderText'
    },
    {
      title: 'Image | Text Section',
      name: 'pageBuilderImageText',
      type: 'pageBuilderImageText'
    },
    {
      title: 'Grid Section',
      name: 'pageBuilderGrid',
      type: 'pageBuilderGrid'
    },
    {
      title: 'CTA Section',
      name: 'pageBuilderCta',
      type: 'pageBuilderCta'
    }
  ]
}