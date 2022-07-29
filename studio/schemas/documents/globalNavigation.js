export default {
  title: 'Global Navigation',
  name: 'globalNavigation',
  type: 'document',
  fields: [
    {
      title: 'Navigation Links',
      name: 'navLinks',
      type: 'array',
      of: [{ type: 'navigationLink' }]
    }
  ]
}