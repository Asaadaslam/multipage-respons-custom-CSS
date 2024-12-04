import Link from "next/link"
import "../style/Header.css"

import React from 'react'

const Header = () => {
  return (
    <div className="header">
      
      {/*right*/}
      <div className="header-right">
        <ul className="header-links">
        <li >
          <Link className="header-nav" href={"/"}>Home Page</Link>
        </li>

        <li >
          <Link className="header-nav" href="/Page02"> Page 02</Link>
        </li>

        <li >
          <Link className="header-nav" href={"/Page03"}>Page 03</Link>
        </li>

        <li >
          <Link className="header-nav" href={"/Page04"}>Page 04</Link>
        </li>

        <li >
          <Link className="header-nav" href={"/Page05"}>Page 05</Link>
        </li>
        
        </ul>
      </div>
    </div>
  )
}
export default Header