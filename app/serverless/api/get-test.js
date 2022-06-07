import { useFirebase } from './services/useFirebase'
export default async (req, res) => {
  const url = new URL('http://e.g' + req.url)

  res.setHeader(
    'Cache-Control',
    'max-age=0, s-maxage=86400, stale-while-revalidate'
  )

  const { getTest } = useFirebase()

  const data = await getTest()

  res.end(JSON.stringify({ data }))
}
