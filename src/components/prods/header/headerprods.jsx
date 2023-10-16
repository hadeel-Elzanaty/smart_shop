import React from 'react'
import "../header/styles/headerpro.scss"
import { Link } from 'react-router-dom'
const HeaderProds = () => {
  return (
    <div className='headdiv'>
      <h1  >
        تسوق احدث المنتجات المصرية
      </h1>

      <div className='headpages'>
        <Link to='/' >
           الرئيسية </Link>
        <span className=' text-red-700 me-2' > / </span>
        <Link to='/prods' className='me-2 text-lg'> 
          المنتجات 
        </Link>
      </div>

    </div>
  )
}

export default HeaderProds