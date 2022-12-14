import React from 'react'
import Head from 'next/head'


interface Props {
    title: string
}
function SharedHead({title}: Props) {
  return (
    <div>
            <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default SharedHead
