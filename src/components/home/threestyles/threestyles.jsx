import React from 'react'
import "../threestyles/styles/threestyles.scss"
import img1 from "../../../assets/images/man3.jpeg"
import img2 from "../../../assets/images/woman-with-phone 1 (1).png"
import img3 from "../../../assets/images/woman-with-phone 1.png"

const ThreeStyles = () => {
    return (
        <div className='brandStyles'>
            <div className='stylesDiv'>

                <div>
                    <img src={img1} alt="" />
                </div>
                <h3 >
                    مع اجمل صيحات الموضه والفاشون
                </h3>
                <p>
                    اطلاله فريده مع اجمل تشكيله ملابس شبابي
                </p>
            </div>
            <div className='stylesDiv'>
                <h3>
                    اشتري اللي يخليك شيك
                </h3>
                <p>
                    مع احدث واجمل ملابس الشباب الحديثه

                </p>
                <div>
                    <img src={img2} alt="" />
                </div>
            </div>
            <div className=" stylesDiv" >

                <div>
                    <img src={img3} alt="" />
                </div>
                <h3>استمتعي باجواء مبهره في الخروجات</h3>
                <p>
                    مع باقة من اجمل الملابس الكاجوال البناتي المودرن
                </p>
            </div>

        </div>
    )
}

export default ThreeStyles