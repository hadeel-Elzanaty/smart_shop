import React from 'react'
import { useState } from 'react'
import "./styles/stars.scss"
const Stars = ({ evaluate }) => {
    const [rate, setRate] = useState(null)
    const [hoverRate, setHoverRate] = useState(null)

    return (

        <div className=" starsDiv d-flex inline-flex">
            {
                [...Array(5)].map((star, index) => {
                    const currentRate = index + 1

                    return (
                        <label key={index}>
                            <input type='radio' name='rate'
                                className="hidden"
                                value={currentRate}
                                onClick={() => setRate(currentRate)}

                            />
                            {evaluate
                                ?
                                <svg
                                onClick={() => setRate(currentRate)} className='star me-1' 
                                xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 18 18"
                                 fill="none"
                                 >
                                     <g clipPath="url(#clip0_1333_1853)">
                                    <path 
                                    d = {currentRate <= (hoverRate ||rate) 
                                        ?"M10.6594 15.8352L7.05528 18.0151C6.39525 18.4146 5.58758 17.824 5.76127 17.0771L6.71658 12.978L3.52932 10.2163C2.94745 9.71257 3.26009 8.75726 4.02434 8.69647L8.21902 8.3404L9.86042 4.46705C10.1557 3.76359 11.1631 3.76359 11.4584 4.46705L13.0998 8.33171L17.2945 8.68778C18.0587 8.74857 18.3714 9.70389 17.7895 10.2076L14.6022 12.9693L15.5575 17.0685C15.7312 17.8153 14.9236 18.4059 14.2635 18.0064L10.6594 15.8352Z"
                                        :"M16.5575 6.29391L11.7175 5.87391L9.82754 1.42391C9.48754 0.613906 8.32754 0.613906 7.98754 1.42391L6.09754 5.88391L1.26754 6.29391C0.387543 6.36391 0.0275433 7.46391 0.697543 8.04391L4.36754 11.2239L3.26754 15.9439C3.06754 16.8039 3.99754 17.4839 4.75754 17.0239L8.90754 14.5239L13.0575 17.0339C13.8175 17.4939 14.7475 16.8139 14.5475 15.9539L13.4475 11.2239L17.1175 8.04391C17.7875 7.46391 17.4375 6.36391 16.5575 6.29391ZM8.90754 12.6539L5.14754 14.9239L6.14754 10.6439L2.82754 7.76391L7.20754 7.38391L8.90754 3.35391L10.6175 7.39391L14.9975 7.77391L11.6775 10.6539L12.6775 14.9339L8.90754 12.6539Z"
                               }
                                    fill="#FFC107" 
                                    onMouseEnter={() => setHoverRate(currentRate)}
                                    onMouseLeave={() => setHoverRate(null)}
                                    />
                                    </g>
                                </svg>
                                :
                                <svg onClick={() => setRate(currentRate)} className='star' xmlns="http://www.w3.org/2000/svg" 
                                width="18" height="18" viewBox="0 0 22 22" fill="none">
                                    <g clipPath="url(#clip0_1333_1853)">
                                        <path
                                         d="M10.6594 15.8352L7.05528 18.0151C6.39525 18.4146 5.58758 17.824 5.76127 17.0771L6.71658 12.978L3.52932 10.2163C2.94745 9.71257 3.26009 8.75726 4.02434 8.69647L8.21902 8.3404L9.86042 4.46705C10.1557 3.76359 11.1631 3.76359 11.4584 4.46705L13.0998 8.33171L17.2945 8.68778C18.0587 8.74857 18.3714 9.70389 17.7895 10.2076L14.6022 12.9693L15.5575 17.0685C15.7312 17.8153 14.9236 18.4059 14.2635 18.0064L10.6594 15.8352Z"

                                            fill={currentRate < (hoverRate || rate) ? "#9b9898" : "#FFC107"}
                                            onMouseEnter={() => setHoverRate(currentRate)}
                                            onMouseLeave={() => setHoverRate(null)}
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1333_1853">
                                            <rect width="20.8431" height="20.8431" fill="white" transform="matrix(-1 0 0 1 21.0811 0.835938)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            }
                        </label>

                    )
                }
                )
            }
        </div>



    )
}

export default Stars