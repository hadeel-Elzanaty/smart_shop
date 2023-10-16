import React from 'react'
import Navbar from '../components/shared/navbar/navbar'
import Footer from '../components/shared/footer/footer'
import SimilerProducts from '../components/shared/similerproducts/similerproducts'
import MarkCart from '../components/cart/markCart/markCart'

import HeaderProds from '../components/prods/header/headerprods'

const Cart = () => {
  return (
<>
<Navbar/>
<HeaderProds/>
<MarkCart/>
<SimilerProducts/>
<Footer/>

</>
  )
}

export default Cart