import React from 'react'
import img1 from "../../../assets/images/تقييم.jpeg";
import Stars from '../../shared/stars/stars';
import "./styles/evaluation.scss"
const Evaluation = () => {
    const colorstarEvaluate = "#FFC107"
    return (
        <div className='mainEvaluation'>
            <ul className='titEvaluation'>
                <li>
                    <button className='active'>
                        تقييمك للمنتج

                    </button>
                </li>

                <li>
                    <button>
                        معلومات اضافية

                    </button>
                </li>
                <li>
                    <button>
                        الوصف
                    </button>
                </li>
            </ul>
            <hr />
            <div className='contentEvaluation'>

                <div className='addEvaluate'>

                    <h3>
                        اضف تقييم
                    </h3>
                    <div className='addStars'>
                        <Stars evaluate />
                    
                        <h4 className='ms-5'>
                            تقييمك
                        </h4>
                    </div>
                    <form className='form' action="">
                        <input type="text" placeholder='عنوان التقييم' />
                        <textarea name="evaluation" id="" rows="5" placeholder='اكتب تقييمك هنا'></textarea>

                        <div className='persInfo'>
                            <input type="text" className="input2" placeholder='بريدك الالكتروني' />
                            <input type="text" className="input2" placeholder='اسمك' />

                        </div>

                        <input type="submit" value="اضف الان" />
                    </form>
                </div>
                <div className='usersEvaluation'>
                    <h3 className='d-flex inline-flex text-lg mb-3'>
                        <span className='me-1 '>
                            تقييمات
                        </span>
                        <span >10</span>
                    </h3>
                    <div className='evaluate'>

                        <div className='comments'>
                            <h2>
                                منتج رائع. التعبئة والتغليف كانت جيدة ايضا
                            </h2>
                            <p>
                                مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                            </p>
                            <Stars />

                            <div className=" date" >
                                <p className=" d-flex inline-flex" >
                                    <span>2022</span>
                                    <span>
                                        اغسطس
                                    </span>
                                    <span>9</span>
                                </p>
                                <h6 className='ml-5'>
                                    احمد بلال
                                </h6>
                            </div>
                        </div>
                        <img src={img1} alt='' />
                    </div>
                    <div className='evaluate'>

                        <div className='comments'>
                            <h2>
                                منتج رائع. التعبئة والتغليف كانت جيدة ايضا
                            </h2>
                            <p>
                                مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                            </p>
                            < Stars />
                            <div className=" date" >
                                <p className=" d-flex inline-flex" >
                                    <span>2022</span>
                                    <span>
                                        اغسطس
                                    </span>
                                    <span>9</span>
                                </p>
                                <h6 className='ml-5'>
                                    احمد بلال
                                </h6>
                            </div>
                        </div>
                        <img src={img1} alt='' />
                    </div>
                    <div className='evaluate'>

                        <div className='comments'>
                            <h2>
                                منتج رائع. التعبئة والتغليف كانت جيدة ايضا
                            </h2>
                            <p>
                                مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                            </p>
                            <Stars />

                            <div className=" date" >
                                <p className=" d-flex inline-flex" >
                                    <span>2022</span>
                                    <span>
                                        اغسطس
                                    </span>
                                    <span>9</span>
                                </p>
                                <h6 className='ml-5'>
                                    احمد بلال
                                </h6>
                            </div>
                        </div>
                        <img src={img1} alt='' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Evaluation