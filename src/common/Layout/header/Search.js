import React from 'react'
// import logo from '/Users/mac/Visual Studio Code/SWP391/LOFI/SWP391/swp391fe/src/common/assets/images/logo.svg'
import { Link } from'react-router-dom'
export const Search = () => {
   // fixed Header
   window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  return (
<>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={'/images/logo.svg'} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
               <span>0</span>
                {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Search;