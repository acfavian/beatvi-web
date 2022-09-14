import Head from 'next/head'
import Image from 'next/image'

import Header from './../components/Header'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Beatvi - Home</title>
        <meta name="description" content="Beatvi - educacíon " />
        <link rel="icon" href="/beatvi-logo.png" />
      </Head>

      <Header />
      <main>
        <h1>
          Bienvenido a <a href="https://nextjs.org">Beatvi</a>
        </h1>
        {/* <Image src="/beatvi-logo.png" width={50} height={50} /> */}
      </main>

    </>
  )
}
