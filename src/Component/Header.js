import React from 'react';
// import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { FaCartArrowDown } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Header = () => {
    return(
        <>
        <div className='head'>
            <div className='logo'>
                <p>CHOICE</p>

            </div>
            <div className='search-input'>
                <input type='text' placeholder='go with choce.........'/>

            </div>
            <div className='cart'>
            {/* <PiShoppingCartSimpleLight /> */}
            {/* <NavLink to='/cart'>
            </NavLink> */}
            <FaCartArrowDown  className='cart'/>




            </div>
            <div className='login'>
                <button>
                    LOGIN
                </button>

            </div>

        </div>
        </>
    )
}



export default Header;