

    import React from 'react'
    import "../../prods/header/styles/headerpro.scss"
    import { Link } from 'react-router-dom'
    const prodName = "فستان ازرق عصري"
    const HeaderPro = () => {
      return (
        <div className='headdiv'>
          <h1  >
            تسوق احدث المنتجات المصرية
          </h1>
    
          <div className='headpages'>
            <Link to='/' >
               الرئيسية 
               </Link>
            <span className=' text-red-700 me-2' > / </span>
            <Link to='/prods' className='me-2 text-lg'> 
              المنتجات 
            </Link>
            <span className=' text-red-700 me-2' > / </span>
            <Link to='/prods' className='me-2 text-lg'> 
             {prodName}
            </Link>
          </div>
    
        </div>
      )
    }
    
    export default HeaderPro
  