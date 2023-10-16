import React, { useEffect } from 'react';
import Navbar from '../components/shared/navbar/navbar';
import HeaderProds from '../components/prods/header/headerprods';
import Footer from "../components/shared/footer/footer";
import MainProds from '../components/prods/mainprods/mainprods';
import SimilerProducts from '../components/shared/similerproducts/similerproducts';
import { fetchProds } from '../store/productSlice';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
const Prods = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.data)
  const [prods, setProds] = useState(products)

  const [filteredprods, setFilteredprods] = useState(prods)
  useEffect(() => {
    dispatch(fetchProds())
  }, [dispatch])
  useEffect(() => {
    // console.log(products[1])
    setProds(products)
    setFilteredprods(prods)
  //  console.log(prods)
    console.log(filteredprods)
  }, [products])


  return (
    <div>
      <Navbar filteredprods={filteredprods} setFilteredprods={setFilteredprods} prods={products} />
      <HeaderProds />
      <MainProds filteredprods={filteredprods} setFilteredprods={setFilteredprods} prods={products} />
      <SimilerProducts />
      <Footer />
    </div>
  )
}

export default Prods