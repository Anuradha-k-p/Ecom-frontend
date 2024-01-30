import React, { useContext } from 'react';
//import Vedio1 from "../Vedio/xlarge_2x.mp4";
// import "./Compo.css"
import { NavLink } from 'react-router-dom';
import "../App.css"
import { Store } from '../CantextData/Data';
//import Gallery from './Slider';

const Home = () => {
    const [received] =useContext(Store);
    console.log(received)
    return(
        <>
        <div className='vedio'>
            <video controls autoPlay muted src='https://media.istockphoto.com/id/1348034164/video/omni-channel-technology-of-online-retail-business-method.mp4?s=mp4-640x640-is&k=20&c=Sbm_Lgi8UpY4ZjAWDzTTIw224S_prDuj1-PSqARRPQk='/>
        </div>


<div className='letest'>

{/* {received.filter((item) =>  item.id >= 130 && item.id <= 133 && item.category === "home"  ) */}
{received.filter((item) => item.category === "home"  )
          .map((item, index) => {
            return (
              <div className="container" key={index}>
                <img
                  src={item.image}
                  alt="not found"
               
                />
                <div id="Description2">
                <NavLink to={`/dynamic/${item.id}`}>
                <h2>{item.model}</h2>
                </NavLink>
                  {/* <p>{item.Description.slice(0,110)+"..."}</p> */}
                </div>
              </div>
            );
          })}

</div>




        </>
    )
}


export default Home;