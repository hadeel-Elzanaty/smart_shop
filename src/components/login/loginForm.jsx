import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import "./styles/loginForm.scss"
import { toast } from "react-toastify"
const LoginForm = () => {
  const navigate = useNavigate()
  const [activecreate, setActivecreate] = useState(false)
  const [activelogin, setActivelogin] = useState(true)


  return (
    <div className='logindiv'>

      <div className='mainFormdiv'>
        <h2>
          Smart Shop
        </h2>
        <h4>
          تسجيل الدخول
        </h4>
        <p>
          تسجيل الدخول للمتابعة في موقعنا
        </p>


        <div className='formdiv'>

          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              if (!values.password) {
                errors.password = 'Required';
              } else if (values.password.length < 6) {
                errors.password = 'Password not less than 6 chars';
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {

                const response = await axios.post("https://e-commerce-api-3br8.onrender.com/login/", values)
                toast.success("login successful");
                const token = response.data.Token;
                localStorage.setItem("token", token)
                console.log(response.data.Token)
                console.log(values)
                navigate("/")
                setSubmitting(false);

              }
              catch (err) {
                toast.error("error")
              }

            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className='emaildiv'>
                  <svg className='mt-2 ml-3' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 25" fill="none">
                    <path d="M22 6.22656C22 5.12656 21.1 4.22656 20 4.22656H4C2.9 4.22656 2 5.12656 2 6.22656V18.2266C2 19.3266 2.9 20.2266 4 20.2266H20C21.1 20.2266 22 19.3266 22 18.2266V6.22656ZM20 6.22656L12 11.2266L4 6.22656H20ZM20 18.2266H4V8.22656L12 13.2266L20 8.22656V18.2266Z" fill="black" fillOpacity="0.2" />
                  </svg>
                  <Field type="email" name="email" placeholder="البريد الالكتروني" />

                </div>
                <ErrorMessage name="email" component="div" className='errMessage' />

                <hr />
                <div className='passwordDiv'>
                  <svg className='mt-2 ml-3' xmlns="http://www.w3.org/2000/svg" width="13" height="18" viewBox="0 0 16 22" fill="none">
                    <path d="M8 16.7266C7.46957 16.7266 6.96086 16.5158 6.58579 16.1408C6.21071 15.7657 6 15.257 6 14.7266C6 13.6166 6.89 12.7266 8 12.7266C8.53043 12.7266 9.03914 12.9373 9.41421 13.3123C9.78929 13.6874 10 14.1961 10 14.7266C10 15.257 9.78929 15.7657 9.41421 16.1408C9.03914 16.5158 8.53043 16.7266 8 16.7266ZM14 19.7266V9.72656H2V19.7266H14ZM14 7.72656C14.5304 7.72656 15.0391 7.93728 15.4142 8.31235C15.7893 8.68742 16 9.19613 16 9.72656V19.7266C16 20.257 15.7893 20.7657 15.4142 21.1408C15.0391 21.5158 14.5304 21.7266 14 21.7266H2C1.46957 21.7266 0.960859 21.5158 0.585786 21.1408C0.210714 20.7657 0 20.257 0 19.7266V9.72656C0 8.61656 0.89 7.72656 2 7.72656H3V5.72656C3 4.40048 3.52678 3.12871 4.46447 2.19103C5.40215 1.25335 6.67392 0.726563 8 0.726562C8.65661 0.726562 9.30679 0.855891 9.91342 1.10716C10.52 1.35844 11.0712 1.72674 11.5355 2.19103C11.9998 2.65532 12.3681 3.20652 12.6194 3.81315C12.8707 4.41977 13 5.06995 13 5.72656V7.72656H14ZM8 2.72656C7.20435 2.72656 6.44129 3.04263 5.87868 3.60524C5.31607 4.16785 5 4.93091 5 5.72656V7.72656H11V5.72656C11 4.93091 10.6839 4.16785 10.1213 3.60524C9.55871 3.04263 8.79565 2.72656 8 2.72656Z" fill="black" fillOpacity="0.2" />
                  </svg>
                  <Field type="password" name="password" placeholder="كلمة المرور" />

                </div>
                <ErrorMessage name="password" component="div" className='errMessage' />
                <hr />
                <div className='submitdiv'>
                  <h5>
                    <Link to="/">
                      هل نسيت كلمة المرور؟
                    </Link>
                  </h5>
                  <button type="submit"

                    disabled={isSubmitting}>
                    تسجيل الدخول
                  </button>
                </div>
                <h4 className='mt-5'>
                  : او سجل الدخول عبر
                </h4>
                <ul className='d-flex inline-flex'>
                  <li className='me-2'>
                    <Link to='http://linkedin.com' >
                      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 58 59" fill="none">
                        <circle cx="29" cy="29.5" r="29" fill="#0A66C2" />
                        <path d="M21.086 18.5445C21.0856 19.3516 20.7647 20.1254 20.1937 20.6958C19.6227 21.2662 18.8486 21.5864 18.0415 21.586C17.2344 21.5856 16.4606 21.2647 15.8902 20.6937C15.3198 20.1227 14.9996 19.3486 15 18.5415C15.0004 17.7344 15.3214 16.9606 15.8924 16.3902C16.4633 15.8198 17.2375 15.4996 18.0445 15.5C18.8516 15.5004 19.6254 15.8214 20.1958 16.3924C20.7662 16.9633 21.0864 17.7375 21.086 18.5445ZM21.1773 23.8394H15.0913V42.8887H21.1773V23.8394ZM30.7933 23.8394H24.7377V42.8887H30.7324V32.8924C30.7324 27.3237 37.99 26.8063 37.99 32.8924V42.8887H44V30.8231C44 21.4354 33.2581 21.7854 30.7324 26.3955L30.7933 23.8394Z" fill="white" />
                      </svg>
                    </Link>
                  </li>
                  <li className='me-2'>
                    <Link to='http://pinterest.com' >

                      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 58 59" fill="none">
                        <g clipPath="url(#clip0_190_2594)">
                          <path d="M0 29.727C0 41.6021 7.1408 51.8037 17.359 56.289C17.2774 54.264 17.3445 51.8329 17.8638 49.6296C18.4213 47.2754 21.5953 33.8273 21.5953 33.8273C21.5953 33.8273 20.6688 31.9756 20.6688 29.239C20.6688 24.9413 23.1597 21.7316 26.2618 21.7316C28.8996 21.7316 30.174 23.7129 30.174 26.0855C30.174 28.7372 28.4828 32.7036 27.613 36.3773C26.8864 39.4536 29.1554 41.9627 32.1902 41.9627C37.6848 41.9627 41.3855 34.9056 41.3855 26.544C41.3855 20.1881 37.1046 15.4307 29.3183 15.4307C20.5214 15.4307 15.041 21.991 15.041 29.319C15.041 31.8456 15.786 33.6273 16.9528 35.0071C17.4893 35.6408 17.5638 35.8956 17.3696 36.6234C17.2305 37.1569 16.9111 38.4415 16.7788 38.9506C16.5857 39.6851 15.9906 39.9477 15.3267 39.6765C11.2749 38.0224 9.38784 33.5851 9.38784 28.5971C9.38784 20.3591 16.3356 10.481 30.1142 10.481C41.1863 10.481 48.4737 18.4931 48.4737 27.0937C48.4737 38.4701 42.149 46.9691 32.826 46.9691C29.6951 46.9691 26.75 45.2767 25.7411 43.3543C25.7411 43.3543 24.0575 50.0361 23.7009 51.3264C23.086 53.5623 21.8825 55.7971 20.7821 57.5389C23.4505 58.3279 26.2186 58.7284 29.0011 58.7281C45.0155 58.7281 58.0002 45.7441 58.0002 29.727C58.0002 13.7106 45.0155 0.726562 29.0011 0.726562C12.9852 0.726562 0 13.7106 0 29.727Z" fill="#CB1F27" />
                        </g>
                        <defs>
                          <clipPath id="clip0_190_2594">
                            <rect width="58" height="58" fill="white" transform="translate(0 0.726562)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>
                  <li className='me-2'>
                    <Link to='http://facebook.com' >
                      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 59 58" fill="none">
                        <g clipPath="url(#clip0_121_1566)">
                          <path d="M58.333 29C58.333 12.9837 45.3493 0 29.333 0C13.3167 0 0.333008 12.9837 0.333008 29C0.333008 43.4745 10.9378 55.4721 24.8018 57.6477V37.3828H17.4385V29H24.8018V22.6109C24.8018 15.3428 29.1314 11.3281 35.7555 11.3281C38.9274 11.3281 42.2471 11.8945 42.2471 11.8945V19.0312H38.5904C34.988 19.0312 33.8643 21.2669 33.8643 23.5625V29H41.9072L40.6215 37.3828H33.8643V57.6477C47.7282 55.4721 58.333 43.4745 58.333 29Z" fill="#1877F2" />
                          <path d="M40.6205 37.3848L41.9062 29.002H33.8633V23.5645C33.8633 21.2711 34.987 19.0332 38.5894 19.0332H42.2461V11.8965C42.2461 11.8965 38.9275 11.3301 35.7545 11.3301C29.1304 11.3301 24.8008 15.3448 24.8008 22.6129V29.002H17.4375V37.3848H24.8008V57.6497C27.8034 58.1194 30.8607 58.1194 33.8633 57.6497V37.3848H40.6205Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_121_1566">
                            <rect width="58" height="58" fill="white" transform="translate(0.333008)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </li>
                  <li >
                    <Link to='http://twitter.com' >
                      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 56 58" fill="none">
                        <path d="M0 29C0 12.9837 12.536 0 28 0C43.464 0 56 12.9837 56 29C56 45.0163 43.464 58 28 58C12.536 58 0 45.0163 0 29Z" fill="#55ACEE" />
                        <path d="M27.1614 23.572L27.2202 24.5754L26.2409 24.4525C22.6763 23.9815 19.5623 22.3842 16.9182 19.7014L15.6256 18.3703L15.2926 19.3533C14.5876 21.5445 15.038 23.8587 16.5069 25.4151C17.2904 26.2752 17.1141 26.398 15.7627 25.8861C15.2926 25.7222 14.8813 25.5994 14.8422 25.6608C14.7051 25.8042 15.1751 27.6677 15.5472 28.405C16.0565 29.4289 17.0945 30.4324 18.2305 31.0263L19.1901 31.4973L18.0542 31.5178C16.9574 31.5178 16.9182 31.5382 17.0357 31.9683C17.4274 33.2994 18.9747 34.7125 20.6982 35.3268L21.9125 35.7569L20.8549 36.4122C19.2881 37.3542 17.447 37.8867 15.606 37.9277C14.7247 37.9481 14 38.03 14 38.0915C14 38.2963 16.3894 39.4431 17.78 39.8936C21.9517 41.2248 26.9068 40.6513 30.628 38.3782C33.2721 36.7604 35.9161 33.5452 37.15 30.4324C37.8159 28.7736 38.4818 25.7427 38.4818 24.2887C38.4818 23.3467 38.5405 23.2238 39.6373 22.0975C40.2836 21.4421 40.8908 20.7254 41.0083 20.5206C41.2042 20.1315 41.1846 20.1315 40.1857 20.4796C38.5209 21.094 38.2859 21.0121 39.1085 20.0905C39.7157 19.4352 40.4403 18.2474 40.4403 17.8993C40.4403 17.8379 40.1465 17.9403 39.8136 18.1246C39.4611 18.3294 38.6776 18.6365 38.0901 18.8209L37.0325 19.169L36.0728 18.4932C35.544 18.1246 34.7997 17.715 34.408 17.5921C33.4092 17.3054 31.8815 17.3464 30.9806 17.674C28.5324 18.5956 26.9851 20.9711 27.1614 23.572Z" fill="white" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className='btnsRegister'>
        <Link to="/signup">
          <button onClick={() => {
            setActivecreate(true)

            setActivelogin(false)

          }
          }
            className={activecreate ? 'button2 active' : 'button2 '}>

            انشاء حساب

          </button>
        </Link>
        <Link to="/login">
          <button onClick={
            () => {
              setActivelogin(true)
              setActivecreate(false)
            }}
            className={activelogin ? 'button1 active' : 'button1 '}>

            تسجيل الدخول

          </button>
        </Link>
      </div>
    </div>

  )
}

export default LoginForm