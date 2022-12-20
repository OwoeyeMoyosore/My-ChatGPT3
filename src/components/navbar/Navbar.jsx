import React, { Fragment, useState } from 'react'
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"
import logo from "../../assets/logo.svg"
import "./navbar.css"
//BEM = Block Element Modifier

//To be able to reuse the navbar links
const MenuLinks = () =>{
 return(
   <Fragment>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT3?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </Fragment>
 )
}
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="gpt3__navbar">
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
            <img src={logo} alt="Logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
           <MenuLinks />
        </div>
        <div className='gpt3__navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
        {/* for mobile screens */}
        <div className='gpt3__navbar-menu'>
          {
            toggleMenu ? <RiCloseLine color='white' size={27} onClick={()=>setToggleMenu(false)} /> 
            : <RiMenu3Line color='white' size={27} onClick={() => setToggleMenu(true)}/>
          }
          {
            toggleMenu && (
              <div className='gpt3__navbar-menu_container scale-up-center'>
                <div className='gpt3__navbar-menu_container-links'>
                    <MenuLinks />
                    <div className='gpt3__navbar-menu_container-links-sign'>
                      <p>Sign in</p>
                      <button type='button'>Sign up</button>
                    </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar