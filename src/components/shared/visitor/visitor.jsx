import React from 'react'
import "./styles/visitor.scss"
import { Link } from 'react-router-dom'
import { BiUser } from "react-icons/bi";
import { useEffect,useState } from 'react';
import axios from 'axios';
const token =  localStorage.getItem("token");
  
const Visitor = () => {
    const [user,setUser]=useState()

    useEffect(() => {
     try{
        const fetchUser =async()=>{
            const response = await axios.get("https://e-commerce-api-3br8.onrender.com/getProfile/",{
                headers:{
                    token :`Bearar ${token}`
                }
  
            })
            const user = response.data.userProfile;
            setUser(user)
            console.log(user)
        }
        fetchUser();
     } 
     catch(ex){
        console.log(ex)
     } 

    
    }, [token])
  
    return (
        <div className='overlayVisitor'>


      {
        !user && 
        <div className='mainVisitor'>

        <div>

            <Link to="/login">
                <p className='login'>
                    تسجيل الدخول
                </p>
            </Link>
            <span className='mt-1 ms-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_3_8275)">
                        <path d="M12.0929 14.4125C11.5062 14.5858 10.8129 14.6658 9.99958 14.6658H5.99958C5.18625 14.6658 4.49292 14.5858 3.90625 14.4125C4.05292 12.6792 5.83292 11.3125 7.99958 11.3125C10.1662 11.3125 11.9462 12.6792 12.0929 14.4125V14.4125Z" stroke="#7FD3DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.99967 1.33398H5.99967C2.66634 1.33398 1.33301 2.66732 1.33301 6.00065V10.0007C1.33301 12.5207 2.09301 13.9007 3.90634 14.414C4.05301 12.6807 5.83301 11.314 7.99967 11.314C10.1663 11.314 11.9463 12.6807 12.093 14.414C13.9063 13.9007 14.6663 12.5207 14.6663 10.0007V6.00065C14.6663 2.66732 13.333 1.33398 9.99967 1.33398ZM7.99967 9.44732C6.67967 9.44732 5.61301 8.37398 5.61301 7.05398C5.61301 5.73398 6.67967 4.66732 7.99967 4.66732C9.31967 4.66732 10.3863 5.73398 10.3863 7.05398C10.3863 8.37398 9.31967 9.44732 7.99967 9.44732Z" stroke="#7FD3DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.3866 7.05268C10.3866 8.37268 9.31995 9.44602 7.99995 9.44602C6.67995 9.44602 5.61328 8.37268 5.61328 7.05268C5.61328 5.73268 6.67995 4.66602 7.99995 4.66602C9.31995 4.66602 10.3866 5.73268 10.3866 7.05268Z" stroke="#7FD3DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3_8275">
                            <rect width="25" height="25" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </span>
        </div>
        <div>
            <Link to="/signup">
                <p className=''>
                    تسجيل جديد
                </p></Link>
            <span className='mt-1 ms-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_3_8281)">
                        <path d="M12.0929 14.4125C11.5062 14.5858 10.8129 14.6658 9.99958 14.6658H5.99958C5.18625 14.6658 4.49292 14.5858 3.90625 14.4125C4.05292 12.6792 5.83292 11.3125 7.99958 11.3125C10.1662 11.3125 11.9462 12.6792 12.0929 14.4125V14.4125Z" stroke="#444444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.99967 1.33398H5.99967C2.66634 1.33398 1.33301 2.66732 1.33301 6.00065V10.0007C1.33301 12.5207 2.09301 13.9007 3.90634 14.414C4.05301 12.6807 5.83301 11.314 7.99967 11.314C10.1663 11.314 11.9463 12.6807 12.093 14.414C13.9063 13.9007 14.6663 12.5207 14.6663 10.0007V6.00065C14.6663 2.66732 13.333 1.33398 9.99967 1.33398ZM7.99967 9.44732C6.67967 9.44732 5.61301 8.37398 5.61301 7.05398C5.61301 5.73398 6.67967 4.66732 7.99967 4.66732C9.31967 4.66732 10.3863 5.73398 10.3863 7.05398C10.3863 8.37398 9.31967 9.44732 7.99967 9.44732Z" stroke="#444444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.3866 7.05268C10.3866 8.37268 9.31995 9.44602 7.99995 9.44602C6.67995 9.44602 5.61328 8.37268 5.61328 7.05268C5.61328 5.73268 6.67995 4.66602 7.99995 4.66602C9.31995 4.66602 10.3866 5.73268 10.3866 7.05268Z" stroke="#444444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3_8281">
                            <rect width="25" height="25" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </span>

        </div>
    </div>

      }

             {
                user &&

                <div className='mainUser'>

                    <div className='userNameDiv '>

                        <div className='userEmail'>
                            <h5>
                            {user.userName}  مرحبا 
                            </h5>
                            <p>
                            {user.email}
                            </p>
                        </div>
                        <div className='userLink' >
                            <div className='link'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 23" fill="none">
                                    <ellipse cx="12" cy="8.61331" rx="3" ry="2.87112" stroke="white" strokeWidth="1.5" />
                                    <path d="M17.9696 19.1407C17.8105 16.3734 16.9252 14.3555 12.0004 14.3555C7.0757 14.3555 6.1904 16.3734 6.03125 19.1407" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M7 3.19441C8.47087 2.38011 10.1786 1.91406 12 1.91406C17.5228 1.91406 22 6.19888 22 11.4845C22 16.7701 17.5228 21.0549 12 21.0549C6.47715 21.0549 2 16.7701 2 11.4845C2 9.74128 2.48697 8.10694 3.33782 6.69927" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>

                    </div>
                    <hr />
                    <div className='threedivs activeDiv'>
                        <Link to="/">
                            لوحة التحكم
                        </Link>
                        <div className='icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#clip0_3_8231)">
                                    <path d="M15 7.23V2.47C15 1.42 14.552 1 13.439 1H10.611C9.498 1 9.05 1.42 9.05 2.47V7.23C9.05 8.28 9.498 8.7 10.611 8.7H13.439C14.552 8.7 15 8.28 15 7.23V7.23ZM15 13.53V12.27C15 11.22 14.552 10.8 13.439 10.8H10.611C9.498 10.8 9.05 11.22 9.05 12.27V13.53C9.05 14.58 9.498 15 10.611 15H13.439C14.552 15 15 14.58 15 13.53ZM6.95 8.77V13.53C6.95 14.58 6.502 15 5.389 15H2.561C1.448 15 1 14.58 1 13.53V8.77C1 7.72 1.448 7.3 2.561 7.3H5.389C6.502 7.3 6.95 7.72 6.95 8.77V8.77ZM6.95 2.47V3.73C6.95 4.78 6.502 5.2 5.389 5.2H2.561C1.448 5.2 1 4.78 1 3.73V2.47C1 1.42 1.448 1 2.561 1H5.389C6.502 1 6.95 1.42 6.95 2.47Z" stroke="#7FD3DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_8231">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                    </div>
                    <div className='threedivs'>
                        <Link to="/">
                            تفاصيل الحساب
                        </Link>
                        <div className='icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#clip0_3_8235)">
                                    <path d="M12.0929 14.4125C11.5062 14.5858 10.8129 14.6658 9.99958 14.6658H5.99958C5.18625 14.6658 4.49292 14.5858 3.90625 14.4125C4.05292 12.6792 5.83292 11.3125 7.99958 11.3125C10.1662 11.3125 11.9462 12.6792 12.0929 14.4125V14.4125Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.99967 1.33398H5.99967C2.66634 1.33398 1.33301 2.66732 1.33301 6.00065V10.0007C1.33301 12.5207 2.09301 13.9007 3.90634 14.414C4.05301 12.6807 5.83301 11.314 7.99967 11.314C10.1663 11.314 11.9463 12.6807 12.093 14.414C13.9063 13.9007 14.6663 12.5207 14.6663 10.0007V6.00065C14.6663 2.66732 13.333 1.33398 9.99967 1.33398ZM7.99967 9.44732C6.67967 9.44732 5.61301 8.37398 5.61301 7.05398C5.61301 5.73398 6.67967 4.66732 7.99967 4.66732C9.31967 4.66732 10.3863 5.73398 10.3863 7.05398C10.3863 8.37398 9.31967 9.44732 7.99967 9.44732Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.3866 7.05268C10.3866 8.37268 9.31995 9.44602 7.99995 9.44602C6.67995 9.44602 5.61328 8.37268 5.61328 7.05268C5.61328 5.73268 6.67995 4.66602 7.99995 4.66602C9.31995 4.66602 10.3866 5.73268 10.3866 7.05268Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_8235">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                    </div>
                    <div className='threedivs '>
                        <Link to="/" >
                            تسجيل الخروج
                        </Link>
                        <div className='icon'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#clip0_3_8254)">
                                    <path d="M5.93366 5.04016C6.14033 2.64016 7.37366 1.66016 10.0737 1.66016H10.1603C13.1403 1.66016 14.3337 2.85349 14.3337 5.83349V10.1802C14.3337 13.1602 13.1403 14.3535 10.1603 14.3535H10.0737C7.39366 14.3535 6.16033 13.3868 5.94033 11.0268M10.0003 8.00016H2.41366M3.90033 5.76682L1.66699 8.00016L3.90033 10.2335" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_8254">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                    </div>
                </div>
            } 
        </div>
    )
}

export default Visitor