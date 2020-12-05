import { NextPage } from 'next'
import Head from 'next/head'

type Props = {
  message: string
}

const Home: NextPage<Props> = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello World</h1>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default Home
