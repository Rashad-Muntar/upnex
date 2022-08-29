import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../src/Components/Layout/navbar'
import SharedHead from '../src/header'
import HeroAndNavigation from '../src/Components/presntational/Homepage/heroAndNavigation'

const Home: NextPage = () => {
  return (
    <main className='main'>
      <SharedHead title='Home page'/>
      <HeroAndNavigation />
    </main>
  )
}

export default Home
