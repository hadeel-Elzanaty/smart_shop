import React from 'react';
import Products from '../../products/products';

import "../allcategories/styles/allcategories.scss";
import ProdSwiper from './prodswiper/prodSwiper';
//import { SliderNavBtn } from './sliderBtns/sliderNavBtn';
import { Link } from 'react-router-dom';



const AllCategories = () => {
    return (
        <div className='main' >
          <div className='swiperDiv'>
          <ProdSwiper />
       
          </div>
         <table className='table'>
                <thead>
                    <tr>
                        <th>
                            تسوق عبر الفئات
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                           
                           <Link to= "/">
                           رجالي
                           </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <Link to="/">
                        حريمي
                        </Link>
                           
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <Link to="/">
                        اطفال
                        </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <Link to="/">
                        اكسسورات
                        </Link>
                           
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <Link to="/">
                        العاب
                        </Link>
                           
                        </td>
                    </tr>

                </tbody>
            </table> 

        </div>
    )
}

export default AllCategories