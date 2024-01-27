import React from 'react';
import Contact from './../Contact';
import { NavLink } from 'react-router-dom';
import "./Compo.css"
import { SiGmail } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return(
        <>
        <div className='contact-short'>
            <div className='grid grid-two-column'>
                <div>
                    <h3>Ready to start?</h3>
                    <h3> Talk To us Today</h3>
                    
                </div>
                <div>
                    <button >
                        <NavLink to='/' className='footer-but'> Get Started</NavLink>
                    </button>
                </div>

            </div>


        </div>
        <footer>
            <div className='footer-about'>
                <h3>ecom</h3>
                <p>Lore.................
                </p>

            </div>
            <div className='footer-subscribe'>
                <h4>Subscribe to Get Important Updates.</h4>
                <input type='email' placeholder='Enter Your Mail'/>
                <button  className='footer-but'>Subscribe</button>

            </div>
            <div className='footer-social'>
                <h3>Follow Us</h3>
                <div>
                <SiGmail />
                <FaTwitter />
                <ImFacebook2 />
                <FaInstagram />
                </div>

            </div>
        </footer>
        <hr/>
        <div>
            <p>@{ new Date().getFullYear()}mmmmmmmm . All rights Reserved</p>
        </div>
        
        </>
    );
}


export default Footer;