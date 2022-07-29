import React from 'react'

const LeadStyle = ({ children }) => (
  <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>{children}</div>
)

const SmallStyle = ({ children }) => (
  <div style={{ fontSize: '0.75rem' }}>{children}</div>
)

export default {
  title: 'Body',
  name: 'basicPortableText',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Lead', value: 'lead', blockEditor: { render: LeadStyle } },
        { title: 'Small', value: 'small', blockEditor: { render: SmallStyle } },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'Link',
                name: 'href',
                type: 'url',
                description: 'Please use relative urls for internal links.',
                validation: Rule =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ['https', 'http', 'mailto', 'tel'],
                  }),
              },
              {
                title: 'Style',
                name: 'style',
                type: 'string',
                options: {
                  list: ['link', 'button']
                },
                initialValue: 'link'
              }
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
  ],
}