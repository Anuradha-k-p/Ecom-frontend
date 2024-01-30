import React, { useContext } from 'react';
import { Store } from '../CantextData/Data';

const Grocery = () => {
    const [received] =useContext(Store);
  
    return(
        <>
        <video controls autoPlay muted src='https://media.istockphoto.com/id/1448313519/video/supermarket-shopping-and-groceries-speed-walking-for-stock-market-sale-discount-or-promotion.mp4?s=mp4-640x640-is&k=20&c=27-cBLXd76FSSrgeE6ciCHibQtBN31NswxGyeoJVSds=' className='first'/> 

        
<div className='letest'>

{/* {received.filter((item) =>  item.id >= 130 && item.id <= 133 && item.category === "home"  ) */}
{received.filter((item) => item.category === "grocery"  )
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


export default Grocery;