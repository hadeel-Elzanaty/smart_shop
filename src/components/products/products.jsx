import React, {useEffect} from 'react';
import "../products/styles/products.scss";
import SingleProduct from '../shared/singleProduct/singleProduct'
import { useSelector,useDispatch } from 'react-redux';
import { fetchProds } from '../../store/productSlice';
const Products = () => {
  const dispatch = useDispatch()

  const products = useSelector(state => state.products.data)

  useEffect(()=>{
     console.log(products[1])
  },[products])

  return (
    <div >
      <h4 className='prodsAddress text-center'>
        احدث المنتجات
      </h4>

      <div className=' prodsDiv d-flex inline-flex'>
        {
          products.map((pro) => {
            
         return   pro.id < 9 && <SingleProduct className="product" key={pro.id} img ={pro.image} category={pro.category} />

          })}
      </div>

    </div>
  )
}

export default Products