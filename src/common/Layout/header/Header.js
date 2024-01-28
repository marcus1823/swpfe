import React from "react"
import "./Header.css"
import Head from "./Head"

import Navbar from "./Navbar"
import Search from "./Search"
export const Header = () => {
  return (
    <div>
        <Head/>
        <Search/>
        <Navbar/>
        {/* <Navbar />
 <Search/> */}
    </div>
  )
}
export default Header