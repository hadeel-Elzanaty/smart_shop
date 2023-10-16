import React from 'react';
import { Link } from 'react-router-dom';
import "../deadline/styles/deadline.scss";
import { useEffect, useRef, useState } from 'react';
import img from "../../../assets/images/c1 1.png";
import img2 from "../../../assets/images/c3.png";
const Deadline = () => {
    
    
   // console.log (futureTime)
   
   // console.log (newDate)
    const [Hours, setHours] = useState(0);
   const [Days, setDays] = useState(0);
    const [Minutes, setMinutes] = useState(0);
    const [Seconds, setSeconds] = useState(0);
    const deadline = "2023,09,20";


  const getTime=()=>{   
// get time by millisecond
    const remainTime = Date.parse(deadline) - Date.now();
setDays(Math.floor(remainTime/ (1000*60*60*24)))
setHours(Math.floor(remainTime/ (1000*60*60) % 24))
setMinutes(Math.floor(remainTime/ (1000*60) % 60 ))
setSeconds(Math.floor(remainTime/ (1000) %60))};

   // const nowTime = `${Days}:${Hours} : ${Minutes} : ${Seconds}`;
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
    
        return () => clearInterval(interval);
      }, [deadline ]);


    return (
        <div className='mainDiv d-flex inline-flex'>
        <div className='firstImg'>
            <img src={img} alt="" />
        </div>
        <div className='midDiv'>
            <h6>
                اكبر خصم على الاطلاق
            </h6>
            <h1>
                احدث ملابس الاطفال
            </h1>

            <div className='time-div d-flex inline-flex'>
                <div className='second'>
                    <h2>{Seconds}</h2>
                    <h3>
                        ثانية
                    </h3>
                </div>
                <div>

                    <h2>{Minutes}</h2>
                    <h3>
                        دقيقة
                    </h3>
                </div>
                <div>
                    <h2>
                        {Hours}
                    </h2>
                    <h3>
                        ساعة
                    </h3>
                </div>
                <div>

                    <h2>{Days}</h2>
                    <h3>
                        يوم
                    </h3>
                </div>
            </div>

            <button className='btn'>
                <Link to="/">
                    تسوق الان
                </Link>
            </button>
        </div>
        <div className='secImg'>
            <img src={img2} alt="" />
        </div>

    </div>
)

}

export default Deadline;