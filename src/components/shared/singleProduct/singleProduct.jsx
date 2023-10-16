import React from 'react';
import img from "../../../assets/images/Rectangle 3677 (4).png";
import "../singleProduct/styles/single-product.scss";
import { AiFillHeart } from "react-icons/ai";
import Stars from '../stars/stars';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cartSLice';
const SingleProduct = ({ img, category, priceAfter, price, product }) => {

    const [hovered, setHovered] = useState(false);
    const [loved, setLoved] = useState(false);
    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    return (

        <div
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            className=" pro-div bg-white ps-2 ">

            <div className="pro-img ">
                <img
                    className="rounded-t-lg"
                    src={img}

                    alt="" />
                {loved
                    ? <AiFillHeart className='like-icon' onClick={() => setLoved(!loved)} />
                    : <AiFillHeart className='notlike-icon' onClick={() => setLoved(!loved)} />}
                {
                    hovered
                        ? <div className='addPro'>
                            <h2
                                onClick={() => {
                                    handleAddToCart( product )
                                }} >
                                اضف للعربة
                            </h2>
                        </div>
                        : <div> </div>
                }
            </div >

            <div className="pro-details mt-3  mb-2">
                <div className=' pro-price d-flex inline-flex '>
                    <span className='me-1'>ج.م</span>
                    <span >{priceAfter}</span>
                </div>
                <Stars />
            </div>
            <div className="mb-4 pro-name  d-flex inline-flex">
                <div className=' pro-delprice d-flex inline-flex '>
                    <del className='del'>ج.م</del>
                    <del className='del'>{price}</del>
                </div>
                <div>
                    {category}
                </div>
            </div>

            <div className='btn-div d-flex inline-flex'>
                <button className='pro-btn'>
                    <span> XL</span>
                </button>
                <button className='pro-btn'>
                    L
                </button>
                <button className='pro-btn'>
                    M
                </button>

                <button className='pro-btn'>
                    S
                </button>
                <button className='pro-btn active'>
                    XS
                </button>
            </div>

        </div>



    )
}

export default SingleProduct