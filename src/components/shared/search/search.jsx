import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai"
import "./styles/search.scss"
import { Link } from 'react-router-dom'
import { includes } from 'lodash'

const Search = ({ filteredprods, setFilteredprods, prods }) => {
    const [closeSearch, setCLoseSearch] = useState(false)
    const [search, setSearch] = useState("")





    const handleChange = (e) => {
        setSearch(e.target.value)
        const clone = [...prods]
        console.log(clone)

        const searchprods = clone.filter(pro => pro.name.includes(e.target.value)

        )
        setFilteredprods(searchprods)
        filteredprods = searchprods
        console.log(searchprods)
        console.log(filteredprods)





    }



    const handleSearch = () => {
     
  
        setFilteredprods(filteredprods)
        setSearch("")
        setCLoseSearch(true)



    }


    return (
        <>
            {!closeSearch
                ? <div className='overlay'>
                    <div className='mainSearch'>
                        <p onClick={() => setCLoseSearch(true)}>
                            <Link to="/"><AiOutlineClose /></Link>
                        </p>
                        <label htmlFor="search">
                            عن ماذا تبحث ؟
                        </label>
                        <div className="searchDiv">
                            <button onClick={handleSearch} className='searchBtn ms-5 mb-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <ellipse cx="7.66667" cy="7.10895" rx="6.66667" ry="5.69293" stroke="white" strokeWidth="1.5" />
                                    <path d="M16.9991 15.0787L15.2214 13.5605L14.3325 12.8014L12.5547 11.2832" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M11.666 12.0436C12.9665 11.91 13.3701 11.5829 13.4438 10.5254" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </button>
                            <input type='search' id='search' onChange={handleChange} value={search} name='search' placeholder='  ....اكتب كلمة للبحث ' />
                        </div>
                        <hr />
                    </div>
                </div>
                : <div></div>
            }
        </>
    )
}

export default Search;