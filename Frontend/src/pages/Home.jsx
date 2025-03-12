import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Specility from '../components/Specility'
import TopDoc from '../components/TopDoc'
import Card from '../components/Card'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <NavBar />
        <Header />
        <Specility />
        <TopDoc />
        <Banner />
        <Footer />
    </>
  )
}

export default Home
