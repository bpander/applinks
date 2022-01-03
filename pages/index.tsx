import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  console.log('render Index');
  return (
    <div>
      <h1>Home</h1>
      <Link href={'/inner'}>Inner</Link>
    </div>
  )
}

export default Home
