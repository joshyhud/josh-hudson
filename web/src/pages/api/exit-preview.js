export default function exit(req, res) {
  let slug = new URL(req?.headers?.referer)
  slug = slug?.pathname

  res.clearPreviewData()

  res.writeHead(307, { Location: slug ?? `/` })
  res.end()
}