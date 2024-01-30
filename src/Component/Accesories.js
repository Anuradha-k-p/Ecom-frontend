import React, { useContext } from 'react';
import { Store } from '../CantextData/Data';

const Accesories = () => {
    const [received] =useContext(Store);
   
    return(
        <>
        <video controls autoPlay muted src='https://media.istockphoto.com/id/1497912096/video/multicultural-couple-evaluates-washing-machine-choices-at-home-electronics-store-man-and.mp4?s=mp4-640x640-is&k=20&c=czBJJXmHgLPXUZs8Qt8qiRC11l1OmyVJ2oyuaaaQAqQ=' className='first'/>
        
     
<div className='letest'>

{/* {received.filter((item) =>  item.id >= 130 && item.id <= 133 && item.category === "home"  ) */}
{received.filter((item) => item.category === "accessories"  )
          .map((item, index) => {
            return (
              <div className="container" key={index}>
                   {/* <NavLink to={`/detailpage/${item.id}`} className="linkdes linkdes2"> */}
                <img
                  src={item.image}
                  alt="not found"
               
                />
                <div id="Description2">
                <h2>{item.model}</h2>
                  {/* <p>{item.Description.slice(0,110)+"..."}</p> */}
                </div>
                {/* </NavLink> */}
              </div>
            );
          })}

</div>
        </>
    );
}


export default Accesories;