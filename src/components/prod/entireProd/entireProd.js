import React from 'react'
import SwiperProd from '../swiperprod/swiperprod'
import DescProd from '../descProd/descProd'
import "./styles/entireProd.scss";
const EntireProd = () => {
    return (
        <div className='entireprodDiv  '>
           
           
           <DescProd />
           
           <SwiperProd />
        </div>
    )
}

export default EntireProd