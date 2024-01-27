import React, { useState } from 'react';
import {BrowserRouter,Routes,Route, NavLink} from "react-router-dom";
import Home from '../Component/Home';
import StoreCp from '../Component/Store';
import Iphone from '../Component/Iphone';
import Ipad from '../Component/Ipad';
import Macbook from '../Component/Macbook';
import Accesories from '../Component/Accesories';
import Dynamic from './Dynamic';
import Error from '../Component/Error';
import "./style.css"
import Footer from '../Component/Footer';
// import { CgMenu } from "react-icons/cg";
// import { CgClose } from "react-icons/cg";


const RouterCompo = () => {

  // const[count,setCount]=useState(false)
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  const closeMenu = () => {
    setMenuOpen(false);
  };


    return(
        <>
        <BrowserRouter>

        <div className="hamburger-menu">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={menuOpen ? 'line line1 open' : 'line line1'}></div>
        <div className={menuOpen ? 'line line2 open' : 'line line2'}></div>
        <div className={menuOpen ? 'line line3 open' : 'line line3'}></div>
      </div>

      <div className={menuOpen ? 'menu open' : 'menu'}>
       
        <NavLink onClick={closeMenu} style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/">HOME</NavLink>
        <NavLink onClick={closeMenu} style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/store">STORE</NavLink>
         <NavLink onClick={closeMenu} style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/iphone">IPHONE</NavLink>
        <NavLink onClick={closeMenu} style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/ipad">IPAD</NavLink>
       <NavLink onClick={closeMenu} style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/macbook">MACBOOK</NavLink>
       <NavLink onClick={closeMenu} style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/accesories">ACCESORIES</NavLink>







      
      </div>
    </div>





{/* 

        <div className='nav-list'>


        <ul>
      <li>  <NavLink style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/">HOME</NavLink></li>
      <li>  <NavLink style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/store">STORE</NavLink></li>
      <li> <NavLink style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/iphone">IPHONE</NavLink></li>
      <li> <NavLink style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/ipad">IPAD</NavLink></li>
      <li> <NavLink style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/macbook">MACBOOK</NavLink></li>
      <li>  <NavLink style={({isActive})=>({color:(isActive)?"blue":"black"})} className="NavLink" to="/accesories">ACCESORIES</NavLink></li>
        </ul>


        <div className='mobile-navbar-btn' onClick={()=>setCount(!count)}>

        <CgMenu  name='menu-outline' className='mobile-nav-icon'/>
        </div>

        </div>

        <div>
          
        </div>
        <CgClose  name='close-outline' className='mobile-nav-icon close-outline'/>
        */}

        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/store' element={<StoreCp/>}/>
           <Route path='/iphone' element={<Iphone/>}/>
           <Route path='/ipad' element={<Ipad/>}/>
           <Route path='/macbook' element={<Macbook/>}/>
           <Route path='/accesories' element={<Accesories/>}/>
           <Route path='/dynamic/:id' element={<Dynamic/>}/>
           <Route path='*' element={<Error/>}/>


        </Routes>
        <Footer/>
        
        </BrowserRouter>
        
        
        </>
    )
}



export default RouterCompo;


// molbile - https://img.freepik.com/premium-vector/cute-kawaii-smartphone-chibi-mascot-vector-cartoon-style_912383-844.jpg
//ipad -https://i.pinimg.com/736x/5a/ce/a2/5acea221078798ff4d7d1e39bfa2d0ae.jpg