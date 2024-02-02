import React from 'react';
// import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { FaCartArrowDown } from "react-icons/fa";
import { NavLink } from 'react-router-dom';



const Header = () => {
    // const navigate =useNavigate();
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
            <NavLink to='/cart'>

            <FaCartArrowDown  className='cart'/>
            </NavLink>




            </div>
            <div className='login'>
                <NavLink to='/register'>
           
                <button className='regi'>
                    REGISTER
                </button>
                </NavLink>
            

            </div>

        </div>
        </>
    )
}



export default Header;
