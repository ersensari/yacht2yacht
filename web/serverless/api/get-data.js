export default (req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 400
    res.end('NOT ALLOWED')
  }

  const url = new URL('http://e.g' + req.url)

  const routeName = url.searchParams.get('name') || ''
  const routePath = url.searchParams.get('path') || ''
  console.log(routePath);
  res.setHeader(
    'Cache-Control',
    'max-age=0, s-maxage=86400, stale-while-revalidate'
  )

  res.end(
    JSON.stringify({
      server: true,
      message: req.method,
      path: routePath
    })
  )
}
