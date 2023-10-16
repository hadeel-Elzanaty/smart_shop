import React, { useEffect, useState } from 'react'
import { BiSolidLeftArrow } from "react-icons/bi";
import { VscCircle } from "react-icons/vsc";
import img1 from "../../../assets/images/c3.png"
import "../mainprods/styles/mainprods.scss";
import { PaginationItem } from '@mui/material';
import { BsArrowRightShort } from "react-icons/bs"
import { BsArrowLeftShort } from "react-icons/bs"

import Slider from "react-slider"
import Pagination from "@mui/material/Pagination"
import { Link } from 'react-router-dom';
import SingleProduct from '../../shared/singleProduct/singleProduct';

import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';


import { fetchAllCategories } from '../../../store/allCategories';
import _ from "lodash"

//import img2 from "../../../assets/images/Rectangle 3677 (5).png"
//import img3 from "../../../assets/images/Rectangle 3677 (8).png"
const MainProds = ({ filteredprods, setFilteredprods, prods }) => {
    //categories
    const [categoreis, setCategories] = useState(true)
    const [price, setPrice] = useState(true)
    const [size, setSize] = useState(true)
    const [color, setColor] = useState(true)
    const [trademark, setTrademark] = useState(true)
    const [special, setSpecial] = useState(true)
    const dispatch = useDispatch()

    const response = useSelector(state => state.categories.data.data)

    const MIN = 10;
    const MAX = 1000;
    const initalState = [380, 740]


    const [values, setValues] = useState(initalState)

    //pagination
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);

    const [noProds, setNoProds] = useState(20);
    const count = Math.ceil(noProds / pageSize)
    const handlechangePage = (e, newPage) => {
        setPage(newPage)
    }
    const firstIndex = (page - 1) * pageSize;

    useEffect(() => {
        dispatch(fetchAllCategories())

    }, [dispatch])
    const getproductsincat = (idCat) => {

        const clonepro = [...prods]
        const prodsCat = clonepro.filter((pro) => {
           return pro.categoryId === idCat
   

        })
        setFilteredprods(prodsCat)
        console.log(idCat)
        console.log(prodsCat)
        console.log(clonepro);
    }
    useEffect(() => {
        //    console.log(response);




    }, [response])
    useEffect(() => {
        console.log(response);

        console.log(filteredprods)
        const noOfProducts = filteredprods.length;
        setNoProds(noOfProducts)


    }, [filteredprods, page, response])


    return (
        <div className='mainProds'>
            <div className='leftmainProds'>
                <div className='firstleft' >
                    <div className='filterAcc'>
                        <div className='select-div'>

                            <select name="" id="">
                                <option value="الأقل سعرا">
                                    الأقل سعرا
                                </option>
                                <option value=" الأكثر سعرا">
                                    الأكثر سعرا
                                </option>
                                <option value=" النوع">
                                    النوع
                                </option>
                                <option value=" الاكثر طلبا">
                                    الاكثر طلبا
                                </option>
                            </select>
                        </div>
                        <h6 className='ms-4'>
                            ترتيب حسب
                        </h6>

                    </div>


                    <button onClick={() => { setPageSize(10) }}>
                        <div className='nums ms-2'>10</div>
                    </button>
                    <button >
                        <div onClick={() => { setPageSize(8) }} className='nums ms-2'>8</div>
                    </button>


                    <button onClick={() => { setPageSize(6) }}>
                        <div className='nums ms-2'> 6</div>
                    </button>
                    <button onClick={() => { setPageSize(4) }}>
                        <div className='nums ms-8'>4</div>
                    </button>
                    <p className='me-12 ms-4'>
                        مشاهدة
                    </p>
                    <div className='bars'>
                        <p className='firBar'></p>
                        <p className='secBar'></p>
                    </div>
                    <div
                    onClick={
                        ()=>{
                            setFilteredprods(prods)
                            setPageSize(6)
                        }
                    }
                    className=' shapesquare'>
                        <div className='firLine '>
                            <VscCircle />
                            <VscCircle />
                        </div>
                        <div className='secLine'>
                            <VscCircle />
                            <VscCircle />
                        </div>

                    </div>
                    <p className='mt-2 ms-5'>
                        عرض
                    </p>

                </div>
                <div className='secondleft mb-5 '>
                    {
                        filteredprods ?
                            filteredprods.slice(firstIndex, pageSize * page).map((pro, id) =>
                                <Link key={pro.id} to='#'>
                                    <SingleProduct
                                        id={pro.id}
                                        img={pro.image}
                                        category={pro.name}
                                        priceAfter={pro.priceAfterDiscount}
                                        price={pro.price}
                                        product ={pro}
                                    />
                                </Link>
                            )

                            : <div> loading....</div>}



                </div>
                {(count === 1)
                    ? <div></div>
                    :
                    <Box className='paginatn mt-5'>

                        <Pagination className='mt-5' count={count} color="primary"
                            page={page}
                            onChange={handlechangePage}
                            renderItem={(item) => (
                                <PaginationItem
                                    slots={{ previous: BsArrowLeftShort, next: BsArrowRightShort }}
                                    {...item}

                                />
                            )} />
                    </Box>}
            </div>
            <div className='rightmainProds'>

                <ul className='categories'>
                    <li
                        onClick={() => {
                            setCategories(!categoreis)
                        }}
                        className='address '>

                        <h2>

                            الفئات
                        </h2>
                        <span className='mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path opacity="0.5" d="M-2.84144e-07 6.49955C-3.1322e-07 5.83436 0.37561 5.21859 0.979758 4.86617L1.10376 4.7992L9.93528 0.182559L10.0261 0.142244C10.3424 0.0269113 10.6844 -0.0193171 11.0242 0.00733232C11.3641 0.0339818 11.6921 0.132754 11.9815 0.295583C12.271 0.458413 12.5136 0.68068 12.6896 0.944232C12.8656 1.20779 12.97 1.50515 12.9942 1.81204L13 1.94143L13 11.0447L12.9978 11.0765L12.9993 11.1493C12.9828 11.439 12.8948 11.7216 12.7419 11.9767C12.589 12.2318 12.375 12.453 12.1154 12.6241L12.0001 12.6949C11.7303 12.8498 11.4258 12.9488 11.1086 12.9848C10.7913 13.0207 10.4691 12.9928 10.1653 12.903L10.0254 12.8562L9.93528 12.8172L1.11602 8.20575C0.777915 8.03709 0.49608 7.78982 0.299817 7.48965C0.103553 7.18948 2.60038e-05 6.84737 -2.84172e-07 6.4989L-2.84144e-07 6.49955Z" fill="black" />
                            </svg>
                        </span>

                    </li>
                    <ul className={categoreis ? '' : "hidden"}>
                        {response ?
                            response.map(cat =>
                                <li
                                    onClick={() => {
                                        getproductsincat(cat.id)
                                    }}
                                    className='cat_content'>
                                    <p>
                                        +
                                    </p>
                                    <Link to='#'>
                                        <p>
                                            {cat.name}
                                        </p>
                                    </Link>

                                </li>
                            ) : <div>loading</div>
                        }

                    </ul>
                </ul>
                <ul className="pricelist">
                    <li onClick={() => {
                        setPrice(!price)
                    }} className='address'>

                        <h2>

                            السعر
                        </h2>
                        <span className='mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path opacity="0.5" d="M-2.84144e-07 6.49955C-3.1322e-07 5.83436 0.37561 5.21859 0.979758 4.86617L1.10376 4.7992L9.93528 0.182559L10.0261 0.142244C10.3424 0.0269113 10.6844 -0.0193171 11.0242 0.00733232C11.3641 0.0339818 11.6921 0.132754 11.9815 0.295583C12.271 0.458413 12.5136 0.68068 12.6896 0.944232C12.8656 1.20779 12.97 1.50515 12.9942 1.81204L13 1.94143L13 11.0447L12.9978 11.0765L12.9993 11.1493C12.9828 11.439 12.8948 11.7216 12.7419 11.9767C12.589 12.2318 12.375 12.453 12.1154 12.6241L12.0001 12.6949C11.7303 12.8498 11.4258 12.9488 11.1086 12.9848C10.7913 13.0207 10.4691 12.9928 10.1653 12.903L10.0254 12.8562L9.93528 12.8172L1.11602 8.20575C0.777915 8.03709 0.49608 7.78982 0.299817 7.48965C0.103553 7.18948 2.60038e-05 6.84737 -2.84172e-07 6.4989L-2.84144e-07 6.49955Z" fill="black" />
                            </svg>
                        </span>
                    </li>
                    <li className={price ? 'priceline' : "hidden"}>

                        <div className='box'>



                            <div className=' values'>
                                <div className=' minValue'>
                                    <span className='me-1'>
                                        رس
                                    </span>
                                    <span>   {values[0]}</span>



                                </div>


                                <div className=' maxValue '>
                                    <span className='me-1'>
                                        رس
                                    </span >
                                    <span >   {values[1]}</span>



                                </div>

                            </div>
                            <Slider
                                onChange={setValues}
                                className={"slider"}
                                value={values}
                                ariaLabel={['Lower thumb', 'Upper thumb']}
                                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                defaultValue={[70, 500]}
                                // renderThumb={(props, state) => <div {...props} >{state.valueNow}rs</div>}


                                // minDistance={10}
                                min={MIN}
                                max={MAX}
                            />


                            <p className=' rightmax'>
                                <span className='me-1'>
                                    ج.م
                                </span>
                                <span>   {MAX}</span>

                            </p>
                            <p className='leftmin'>
                                <span className='me-1'>
                                    ج.م
                                </span>
                                <span>{MIN} </span>
                            </p>



                        </div>






                    </li>
                </ul>
                <ul className='size'>
                    <li
                        onClick={() => {
                            setSize(!size)
                        }}
                        className='address'>

                        <h2>

                            المقاس
                        </h2>
                        <span className='mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path opacity="0.5" d="M-2.84144e-07 6.49955C-3.1322e-07 5.83436 0.37561 5.21859 0.979758 4.86617L1.10376 4.7992L9.93528 0.182559L10.0261 0.142244C10.3424 0.0269113 10.6844 -0.0193171 11.0242 0.00733232C11.3641 0.0339818 11.6921 0.132754 11.9815 0.295583C12.271 0.458413 12.5136 0.68068 12.6896 0.944232C12.8656 1.20779 12.97 1.50515 12.9942 1.81204L13 1.94143L13 11.0447L12.9978 11.0765L12.9993 11.1493C12.9828 11.439 12.8948 11.7216 12.7419 11.9767C12.589 12.2318 12.375 12.453 12.1154 12.6241L12.0001 12.6949C11.7303 12.8498 11.4258 12.9488 11.1086 12.9848C10.7913 13.0207 10.4691 12.9928 10.1653 12.903L10.0254 12.8562L9.93528 12.8172L1.11602 8.20575C0.777915 8.03709 0.49608 7.78982 0.299817 7.48965C0.103553 7.18948 2.60038e-05 6.84737 -2.84172e-07 6.4989L-2.84144e-07 6.49955Z" fill="black" />
                            </svg>
                        </span>

                    </li>
                    <ul className={size ? 'sizelist' : "hidden"}>
                        <li className='size_content'>
                            <button>
                                XL
                            </button>
                        </li>

                        <li className='size_content'>
                            <button>
                                L
                            </button>
                        </li>
                        <li className='size_content '>
                            <button>
                                M
                            </button>
                        </li>
                        <li className='size_content '>
                            <button>
                                S
                            </button>
                        </li>
                    </ul>


                </ul>



                <ul className='colorlist'>
                    <li
                        onClick={() => {
                            setColor(!color)
                        }}
                        className='address'>

                        <h2>

                            اللون
                        </h2>
                        <span className='mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path opacity="0.5" d="M-2.84144e-07 6.49955C-3.1322e-07 5.83436 0.37561 5.21859 0.979758 4.86617L1.10376 4.7992L9.93528 0.182559L10.0261 0.142244C10.3424 0.0269113 10.6844 -0.0193171 11.0242 0.00733232C11.3641 0.0339818 11.6921 0.132754 11.9815 0.295583C12.271 0.458413 12.5136 0.68068 12.6896 0.944232C12.8656 1.20779 12.97 1.50515 12.9942 1.81204L13 1.94143L13 11.0447L12.9978 11.0765L12.9993 11.1493C12.9828 11.439 12.8948 11.7216 12.7419 11.9767C12.589 12.2318 12.375 12.453 12.1154 12.6241L12.0001 12.6949C11.7303 12.8498 11.4258 12.9488 11.1086 12.9848C10.7913 13.0207 10.4691 12.9928 10.1653 12.903L10.0254 12.8562L9.93528 12.8172L1.11602 8.20575C0.777915 8.03709 0.49608 7.78982 0.299817 7.48965C0.103553 7.18948 2.60038e-05 6.84737 -2.84172e-07 6.4989L-2.84144e-07 6.49955Z" fill="black" />
                            </svg>
                        </span>
                    </li>
                    <ul

                        className={color ? 'colorbtns ' : "hidden"}> <li>
                            <button className='btn1 '>

                            </button>
                        </li>
                        <li className=' '>
                            <button className=' btn2'>

                            </button>
                        </li>
                        <li className=' '>
                            <button className='btn3 '>

                            </button>
                        </li>
                        <li >
                            <button className=' btn4'>

                            </button>
                        </li>
                        <li >
                            <button className='btn5'>

                            </button>
                        </li>

                    </ul>
                </ul>
                <ul className='trademark'>
                    <li
                        onClick={() => {
                            setTrademark(!trademark)
                        }}
                        className='address '>

                        <h2>

                            العلامة التجارية
                        </h2>
                        <span className='mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path opacity="0.5" d="M-2.84144e-07 6.49955C-3.1322e-07 5.83436 0.37561 5.21859 0.979758 4.86617L1.10376 4.7992L9.93528 0.182559L10.0261 0.142244C10.3424 0.0269113 10.6844 -0.0193171 11.0242 0.00733232C11.3641 0.0339818 11.6921 0.132754 11.9815 0.295583C12.271 0.458413 12.5136 0.68068 12.6896 0.944232C12.8656 1.20779 12.97 1.50515 12.9942 1.81204L13 1.94143L13 11.0447L12.9978 11.0765L12.9993 11.1493C12.9828 11.439 12.8948 11.7216 12.7419 11.9767C12.589 12.2318 12.375 12.453 12.1154 12.6241L12.0001 12.6949C11.7303 12.8498 11.4258 12.9488 11.1086 12.9848C10.7913 13.0207 10.4691 12.9928 10.1653 12.903L10.0254 12.8562L9.93528 12.8172L1.11602 8.20575C0.777915 8.03709 0.49608 7.78982 0.299817 7.48965C0.103553 7.18948 2.60038e-05 6.84737 -2.84172e-07 6.4989L-2.84144e-07 6.49955Z" fill="black" />
                            </svg>

                        </span>

                    </li>
                    <ul className={trademark ? 'markslist' : "hidden"}>
                        <li >
                            <p>
                                سوني
                            </p>


                        </li>
                        <li className=''>
                            <p>
                                لينوفو
                            </p>
                        </li>
                        <li>
                            <p>
                                جونسون وهاندسون
                            </p>

                        </li>

                        <li>
                            <p>
                                ابل
                            </p>


                        </li>
                        <li>
                            <p>
                                جوجل
                            </p>


                        </li>
                        <li>
                            <p>
                                سامسونج


                            </p>

                        </li>

                    </ul>
                </ul>
                <ul

                    className='specialelements'>
                    <li
                        onClick={() => {
                            setSpecial(!special)
                        }}
                        className='address'>

                        <h2>

                            عناصر مميزة
                        </h2>
                        <span className='mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path opacity="0.5" d="M-2.84144e-07 6.49955C-3.1322e-07 5.83436 0.37561 5.21859 0.979758 4.86617L1.10376 4.7992L9.93528 0.182559L10.0261 0.142244C10.3424 0.0269113 10.6844 -0.0193171 11.0242 0.00733232C11.3641 0.0339818 11.6921 0.132754 11.9815 0.295583C12.271 0.458413 12.5136 0.68068 12.6896 0.944232C12.8656 1.20779 12.97 1.50515 12.9942 1.81204L13 1.94143L13 11.0447L12.9978 11.0765L12.9993 11.1493C12.9828 11.439 12.8948 11.7216 12.7419 11.9767C12.589 12.2318 12.375 12.453 12.1154 12.6241L12.0001 12.6949C11.7303 12.8498 11.4258 12.9488 11.1086 12.9848C10.7913 13.0207 10.4691 12.9928 10.1653 12.903L10.0254 12.8562L9.93528 12.8172L1.11602 8.20575C0.777915 8.03709 0.49608 7.78982 0.299817 7.48965C0.103553 7.18948 2.60038e-05 6.84737 -2.84172e-07 6.4989L-2.84144e-07 6.49955Z" fill="black" />
                            </svg>

                        </span>
                    </li>
                    <ul className={special ? "" : "hidden"}>
                        <li className='eachElement'>

                            <div className='eleContent'>

                                <h6>
                                    فستان ازرق عصري للسيدات
                                </h6>
                                <div className=' pro-price d-flex inline-flex '>
                                    <span className='me-1'>ج.م</span>
                                    <span >800</span>
                                </div>

                            </div>
                            <div className='divImg'>
                                <img src={img1} />

                            </div>
                        </li>
                        <li className='eachElement'>

                            <div className='eleContent'>
                                <h6>
                                    فستان ازرق عصري للسيدات
                                </h6>
                                <div className=' pro-price d-flex inline-flex '>
                                    <span className='me-1'>ج.م</span>
                                    <span >800</span>
                                </div>

                            </div>
                            <div className='divImg'>
                                <img src={img1} />
                            </div>
                        </li>
                        <li className='eachElement'>

                            <div className='eleContent'>
                                <h6>
                                    فستان ازرق عصري للسيدات
                                </h6>
                                <div className=' pro-price d-flex inline-flex '>
                                    <span className='me-1'>ج.م</span>
                                    <span >800</span>
                                </div>


                            </div>
                            <div className='divImg'>
                                <img src={img1} />
                            </div>
                        </li>
                    </ul>
                </ul>
            </div>


        </div >
    )
}

export default MainProds