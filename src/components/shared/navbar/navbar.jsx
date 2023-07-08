import React from 'react'
import logo from "../../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { BiUser } from "react-icons/bi";
import '../navbar/styles/navbar.scss';
const Navbar = () => {
  return (
    <div className='navdiv   '>
      
      <ul>
        <li>
          <CgShoppingCart />
        </li>
        <li>
          <AiOutlineHeart />
        </li>
        <li>
          <BiUser />
        </li>
        <li>
          <BsSearch />
        </li>
      </ul>
      <ul >
        <li>
          <Link to="/">
            اتصل بنا
          </Link>
        </li>
        <li>
          <Link to="/">
            المدونة

          </Link>
        </li>

        <li>
          <Link to="/">
            الشروط والأحكام
          </Link>
        </li>
        <li>
          <Link to="/">
            نبذة عنا

          </Link>
        </li>

        <li>
          <Link to="/">
            الخدمات
          </Link>
        </li>
        <li>
          <Link to="/">
            المنتجات
          </Link>
        </li>
        <li>
          <Link to="/">
            الرئيسية
          </Link>
        </li>
      </ul>


      <div className='me-5 ' >
        <Link to="/"><img className='me-5 ' src={logo} /></Link>
      </div>

    </div>
  )
}

export default Navbar