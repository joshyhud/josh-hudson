const external = new RegExp('^(?:[a-z]+:)?//', 'i')

export const LinkTest = (link) => {
  if (typeof link !== 'string') return
  if (!external.test(link)) return true

  return false
}