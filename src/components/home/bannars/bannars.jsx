import React from 'react';
import img1 from "../../../assets/images/1-removebg-preview (1) 1.png";
import img2 from "../../../assets/images/2-removebg-preview (1) 1.png";
import "../bannars/styles/bannars.scss"
import { Link } from 'react-router-dom';
const Bannars = () => {
    return (
        <div className='bannars-div d-flex inline-flex'>
             <div className='bannar  ban-two'>
                <div className='bannar-content'>
                    <h4>
                        خصم كبير
                    </h4>
                    <h2>
                        فساتين بناتي
                    </h2>
                    <Link to ="/"><p>
                        تسوق الآن
                        </p>
                    </Link>
                </div>
                <div className='banImg-div'>
                    <img src={img2} height={300} alt='' />
                </div>
            </div>
            <div className=' bannar ban-one d-flex inline-flex'>
                <div className='bannar-content'>

                    <h2>ملابس الأطفال</h2>
                    <h4>
                        خصم 50%
                    </h4>
                    <Link to ="/"><p>
                        تسوق الآن
                        </p>
                    </Link>

                </div>
                <div className='banImg-div'>
                    <img src={img1}  alt='' />
                </div>
            </div>
           
        </div>
    )
}

export default Bannars