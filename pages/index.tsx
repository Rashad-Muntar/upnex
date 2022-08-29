import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../src/Components/presntational/navbar'
import SharedHead from '../src/header'
import HeroAndNavigation from '../src/Components/presntational/HeroAndNavigation'

const Home: NextPage = () => {
  return (
    <>
      <SharedHead title='Home page'/>
      <HeroAndNavigation />
    </>
  )
}

export default Home
