import React from 'react';
import Vedio1 from "../Vedio/xlarge_2x.mp4";
// import "./Compo.css"
import "../App.css"

const Home = () => {
    return(
        <>
        <div><video controls autoPlay muted loop src={Vedio1} className='vedio' /></div>
        </>
    )
}


export default Home;