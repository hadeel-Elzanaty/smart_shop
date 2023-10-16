import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../assets/images/logo.png"
import { NavLink } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import '../navbar/styles/navbar.scss';
// import { useEffect } from 'react'
// import { fetchcartprods } from '../../../store/cartSLice'
import { useSelector } from 'react-redux'
import Visitor from '../visitor/visitor'
import Search from '../search/search'
const Navbar = ({filteredprods, setFilteredprods ,prods}) => {
  const [visitor,setVisitor]=useState(false);
  const [search,setSearch]=useState(false);
// const numCartitems = useSelector()

  return (
    <div>
      <div className='navdiv   '>

        <ul>
          <li className="cartlist">
            < Link to="/cart">
              <CgShoppingCart />
            </Link>
            <span className="cartprod">
          1
            </span>
          </li>
          <li>
            < Link to="/">
              <AiOutlineHeart />
            </Link>
          </li>
          <li>
            < Link to="#" onClick={()=>setVisitor(!visitor)}>
              <BiUser />
            </Link>
          </li>
          <li>
            < Link to="/prods/search" onClick={()=>setSearch(!search)}>
              <BsSearch />
            </Link>

          </li>
        </ul>
        <ul >
          <li>
            <NavLink to="/contactus" activeclassname="active-link ">
              اتصل بنا
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeclassname="active-link ">
              المدونة

            </NavLink>
          </li>

          <li>
            <NavLink to="/conditions" activeclassname="active-link ">
              الشروط والأحكام
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" activeclassname="active-link ">
              نبذة عنا

            </NavLink>
          </li>

          <li>
            <NavLink to="/services" activeclassname="active-link ">
              الخدمات
            </NavLink>
          </li>
          <li>
            <NavLink to="/prods" activeclassname="active-link ">
              المنتجات
            </NavLink>
          </li>
          <li>
            <NavLink to="/" activeclassname="active-link ">
              الرئيسية
            </NavLink>
          </li>
        </ul>


        <div className='me-5 ' >
          <NavLink to="/"><img className='me-5 ' src={logo} /></NavLink>
        </div>

      </div>
   {visitor &&    <Visitor/>}
   {search && <Search filteredprods={filteredprods} setFilteredprods={setFilteredprods} prods={prods}/> }
    </div>
  )
}

export default Navbar