export default {
  title: 'SEO',
  name: 'seo',
  type: 'object',
  fields: [
    {
      title: 'Canonical',
      name: 'canonical',
      type: 'url',
      description: `A default canonical url will be dynamically created based on the site url provided in the global SEO options, the parent slug (if appropriate) and the slug. It is only necessary to complete this field if wishing to override the dynamic canonical url.`,
    },
    {
      title: 'Meta title',
      name: 'metaTitle',
      type: 'string',
      description:
        'This field is only necessary if wishing to override the dynamic meta title.',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: '3',
      description:
        'Please provide a unique meta description. If none is supplied a default of the site description will form the meta description for this page.',
      validation: Rule =>
        Rule.max(155).warning(
          'Description too long. Optimal length is 155 characters or less.'
        ),
    },
    {
      title: 'Open Graph Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'No Index Meta tag',
      name: 'noIndex',
      type: 'boolean',
      description: 'Remove URL from search index.',
      options: {
        layout: 'checkbox',
      },
      defaultValue: false
    },
  ],
}