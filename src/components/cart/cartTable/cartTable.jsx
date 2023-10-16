import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../../../store/cartSLice'
import img1 from "../../../assets/images/c3.png"
import "./styles/cartTable.scss"


import { fetchcartprods } from '../../../store/cartSLice';
import { AiOutlineClose } from "react-icons/ai"

const CartTable = () => {
    const dispatch = useDispatch()

    const cartprods = useSelector(state => state.cart.cartItems)
    console.log(cartprods)
    useEffect(() => {
        dispatch(fetchcartprods())
    }, [dispatch])
    useEffect(() => {
        console.log(cartprods)
    }, [cartprods])



    return (
        <table className='table'>
            <thead>
                <tr>

                    <th>
                        المجموع
                    </th>

                    <th>
                        الكمية
                    </th>
                    <th>
                        السعر
                    </th>
                    <th className='text-right'>
                        المنتج
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    cartprods.map((item) =>
                        <tr key={item.id}>


                            <td>
                                <div className='d-flex inline-flex'>
                                    <span className=' spanbold me-1'>
                                        ج.م
                                    </span>
                                    <span className='spanbold'>
                                        {item.priceAfterDiscount * item.numpeices}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className='marketCounter'>
                                    <button className='minusbtn' onClick={() => dispatch(decrease(item))}>-</button>
                                    <span>
                                        {item.numpeices}
                                    </span>
                                    <button className='plusbtn' onClick={() => dispatch(increase(item))}>+</button>
                                </div>
                            </td>
                            <td>
                                <div className='d-flex inline-flex'>
                                    <span className=' spanbold me-1'>
                                        ج.م
                                    </span>
                                    <span className='spanbold'>{item.priceAfterDiscount} </span>
                                </div>
                            </td>
                            <td>
                                <div className='prodDetails'>

                                    <div>
                                        <h4>
                                            {item.name}
                                        </h4>
                                        <h5>
                                            اللون ابيض
                                        </h5>
                                        <h5>
                                            الوزن : <span>2</span>
                                            <span>
                                                كيلو
                                            </span>
                                        </h5>
                                    </div>
                                    <img src={item.image} />
                                </div>
                            </td>
                            <td className='closeBtn'>
                                <button>
                                    <AiOutlineClose />
                                </button>

                            </td>
                        </tr>
                    )
                }

                {/* <tr>


            <td>
                <div className='d-flex inline-flex'>
                    <span className='spanbold me-1'>
                        ج.م
                    </span>
                    <span className='spanbold'>2500 </span>
                </div>
            </td>
            <td>
                <div className='marketCounter'>
                    <button className='minusbtn'>-</button>
                    <span>
                        1
                    </span>
                    <button className='plusbtn'>+</button>
                </div>
            </td>
            <td>
                <div className='d-flex inline-flex'>
                    <span className=' spanbold me-1'>
                        ج.م
                    </span>
                    <span className='spanbold'>2500 </span>
                </div>
            </td>
            <td>
                <div className='prodDetails'>

                    <div>
                        <h4>
                            فستان ابيض عصري
                        </h4>
                        <h5>
                            اللون ابيض
                        </h5>
                        <h5>
                            الوزن : <span>2</span>
                            <span>
                                كيلو
                            </span>
                        </h5>
                    </div>
                    <img src={img1} />
                </div>
            </td>
        </tr>
        <tr>


            <td>
                <div className='d-flex inline-flex'>
                    <span className=' spanbold me-1'>
                        ج.م
                    </span>
                    <span className='spanbold'>2500 </span>
                </div>
            </td>
            <td>
                <div className='marketCounter'>
                    <button className='minusbtn'>-</button>
                    <span>
                        1
                    </span>
                    <button className='plusbtn'>+</button>
                </div>
            </td>
            <td>
                <div className='d-flex inline-flex'>
                    <span className='spanbold me-1'>
                        ج.م
                    </span>
                    <span className='spanbold'>2500 </span>
                </div>
            </td>
            <td>
                <div className='prodDetails'>

                    <div>
                        <h4>
                            فستان ابيض عصري
                        </h4>
                        <h5>
                            اللون ابيض
                        </h5>
                        <h5>
                            الوزن : <span>2</span>
                            <span>
                                كيلو
                            </span>
                        </h5>
                    </div>
                    <img src={img1} />
                </div>
            </td>
        </tr>
        <tr>


            <td>
                <div className='d-flex inline-flex'>
                    <span className='me-1 spanbold'>
                        ج.م
                    </span>
                    <span className='spanbold' >2500 </span>
                </div>
            </td>
            <td>
                <div className='marketCounter'>
                    <button className='minusbtn'>-</button>
                    <span>
                        1
                    </span>
                    <button className='plusbtn'>+</button>
                </div>
            </td>
            <td>
                <div className='d-flex inline-flex'>
                    <span className=' spanbold me-1' >
                        ج.م
                    </span>
                    <span className='spanbold' >2500 </span>
                </div>
            </td>
            <td>
                <div className='prodDetails'>

                    <div>
                        <h4>
                            فستان ابيض عصري
                        </h4>
                        <h5>
                            اللون ابيض
                        </h5>
                        <h5>
                            الوزن : <span>2</span>
                            <span>
                                كيلو
                            </span>
                        </h5>
                    </div>
                    <img src={img1} />
                </div>
            </td>
        </tr> */}
            </tbody>
        </table>
    )
}
export default CartTable;