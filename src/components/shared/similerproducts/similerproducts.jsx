import React from 'react';
import SingleProduct from '../singleProduct/singleProduct';

import "../similerproducts/styles/similerproducts.scss";
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProds } from '../../../store/productSlice';
const SimilerProducts = () => {
    const dispatch = useDispatch()

    const products = useSelector(state => state.products.data)
    useEffect(() => {
        dispatch(fetchProds())
    }, [dispatch])
    useEffect(() => {
        console.log(products[1])
    }, [products])
    return (
        <div className='similer '>
            <h1>
                منتجات مشابهة
            </h1>
            <div className='d-flex inline-flex '>
                {
                    products.map((pro, index) =>

                        index < 5 && <Link to= {`/prods/${pro.id}`} key={pro.id} > 
                         <SingleProduct key={pro[index]} img = {pro.image} 
                        category = {pro.category} 
                        price={pro.price}
                        priceAfter={pro.priceAfterDiscount} 
                        product={pro}/></Link>
                    )
                }
            </div>
        </div>
    )
}

export default SimilerProducts