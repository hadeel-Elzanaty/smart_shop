import React from 'react'
import Navbar from '../components/shared/navbar/navbar'
import Header from '../components/home/header/header'
import Options from '../components/home/options/options'
import Bannars from '../components/home/bannars/bannars'
import Footer  from '../components/shared/footer/footer'

import Products from '../components/products/products'
import Deadline from '../components/home/deadline/deadline'
import AllCategories from '../components/home/allcategories/allcategories'
import { Brands } from '../components/home/brands/brands'
import ThreeStyles from '../components/home/threestyles/threestyles'
//import Search from '../components/shared/search/search'
import Visitor from '../components/shared/visitor/visitor'

const Home = () => {
  return (
    <>
    
      <Navbar />
      <Header />
      <Options />
      <Bannars />
      <Products />
      <Deadline />
      <AllCategories />
      <Brands/>
      <ThreeStyles/>
      <Footer />
    </>
  )
}

export default Home