import React, { useContext } from 'react';
import Vedio1 from "../Vedio/xlarge_2x.mp4";
// import "./Compo.css"
import "../App.css"
import { Store } from '../CantextData/Data';

const Home = () => {
    const [received] =useContext(Store)
    return(
        <>
        <div><video controls autoPlay muted loop src={Vedio1} className='vedio' /></div>
       

        </>
    )
}


export default Home;