import React, { useState } from 'react'

import "./styles/markCart.scss"
import { useEffect } from 'react'
import axios from 'axios'
import CartTable from '../cartTable/cartTable'
const token =  localStorage.getItem("token");
const MarkCart = () => {
    const [name, setName] = useState()
    const onsubmit =async (e) => {

        e.preventDefault()
        const response = await axios.get("https://e-commerce-api-3br8.onrender.com/getCupon/",
     
)
        console.log(response)
        console.log(name)
    }

    return (
        <div className='mark-cart'>
            <div className='markCobon'>
                <h4>
                    الكوبون
                </h4>
                <p>
                    . أدخل رمز الكوبون الخاص بك إذا كان لديك واحد
                </p>
                <div>
                    <form className='cobonForm' onSubmit={onsubmit}>
                        <input type='submit'
                            value="تأكيد الكوبون"

                        />
                        <input type='text' placeholder='رمز الكوبون'
                            onChange={(e) => setName(e.target.value)}
                            value={name} name="name" />


                    </form>
                    <h4>
                        ملحوظة
                    </h4>
                    <p>
                        ...اضافة ملحوظة للبائع
                    </p>
                    <textarea name="" id="" cols="30" rows="3" placeholder='...اكتب ملحوظتك هنا'>

                    </textarea>
                    <div className='sum sum1 mb-1'>
                        <div className='d-flex inline-flex'>
                            <span>
                                ج.م
                            </span>
                            <span>
                                6000
                            </span>
                        </div>
                        <h5>
                            المجموع الفرعي
                        </h5>

                    </div>
                    <div className='sum sumTotal mb-3'>
                        <div className='d-flex inline-flex'>
                            <span>
                                ج.م
                            </span>
                            <span>
                                6000
                            </span>
                        </div>
                        <h5>
                            المجموع الإجمالي
                        </h5>

                    </div>
                    <small>
                        الشحن والضرائب محسوبة عند الدفع
                    </small>
                    <div className='payBtns'>
                        <button>
                            الدفع
                        </button>
                        <button>
                            تحديث السلة
                        </button>

                    </div>

                </div>
            </div>
            <div className='markTable'>
                <h2>
                    سلة التسوق
                </h2>

                <CartTable />
                <div className='btnsCart'>
                    <button>
                        مسح السلة
                    </button>

                    <button>
                        واصل التسوق
                    </button>



                </div>
            </div>

        </div>
    )
}

export default MarkCart