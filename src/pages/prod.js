import React from 'react'
import Navbar from '../components/shared/navbar/navbar'
import HeaderPro from '../components/prod/headerPro/headpro'
import SimilerProducts from '../components/shared/similerproducts/similerproducts'
import Footer from '../components/shared/footer/footer'
import EntireProd from '../components/prod/entireProd/entireProd'
//import DescProd from '../components/prod/descProd/descProd'
//import SwiperProd from '../components/prod/swiperprod/swiperprod'
import Evaluation from '../components/prod/evaluation/evaluation'

const Prod = () => {

   return (
      <>
         <Navbar />
         <HeaderPro />
         <EntireProd />
         <Evaluation />
         <SimilerProducts />
         <Footer />
      </>
   )
}

export default Prod