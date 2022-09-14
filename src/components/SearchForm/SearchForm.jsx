import React, { useRef } from 'react'
import './SearchForm.css';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../../context';
import { useEffect } from 'react';
import { useState } from 'react';


const SearchForm = () => {

  const { setSearchTerm, setResultTitle } = useGlobalContext();
  // const searchText = useRef('')
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate();

  // useEffect(() => searchText.current.focus(), [])

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchText)
    let tempSearchTerm = searchText;
    if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
      setSearchTerm("the lost world")
      setResultTitle("Please Enter Something ...")
    } else {
      setSearchTerm(searchText)
    }
    navigate('/book')
  }
  
  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input type="text" className="form-control"
                placeholder='The Lost World ...'
                value={searchText}
                onChange={(e)=>{setSearchText(e.target.value)}}
                // ref={searchText}
              />
              <button type='submit' className="flex flex-c" onClick={handleSubmit}>
                <FaSearch className='text-purple' size={32}/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm