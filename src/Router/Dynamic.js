import React from 'react';
import { useParams } from 'react-router-dom';
import { Store } from '../CantextData/Data';
import { useContext } from 'react';

const Dynamic = () => {
  const{id} =useParams();
  const [received] = useContext(Store);
  
  return(
    <>
     <div>
            {
                received.filter((item)=>item.id===id).map((item,index)=>{
                  // const {
                  //   id = item.id,
                  //   image = item.image,
                  //   price = (item.price),
                  //   model = item.model,
                  //   quantity = (item.quantity),
                  // } = item;
                  return(
                
                    <div className="single-container" key={index}>
                    {/* <div  className="single-leftsidediv">
                      <img src={item.image} alt="Not Found" />
                    </div>
                    <div className="single-rightsidediv">
                        <div className="single-rightsideinnerdiv">
                      <h2 className="single-modelName">{item.name}</h2>
                      <hr></hr>
                      <h2 className="single-Price-of-All">Deals Of The Day:  {item.price}</h2>
      
                      <h2>Specifications:</h2>
                      <ul>
                        <li>
                          <p className="single-detailpada-p">Brand:  {item.brand}</p>
                        </li>
                        <li>
                          <p className="single-detailpada-p">Type:{item.type}</p>
                        </li>
                        <li>
                          <p className="single-detailpada-p">Color:{item.color}</p>
                        </li>
                        <li>
                          <p className="single-detailpada-p">Category:{item.category}</p>
                        </li>
                       
                      </ul>
                      
                      </div> */}
                      {/* <button className="single-buttonforAll" onClick={() =>
                      dispatch(addtoCart({ id, image, price, quantity, model }))
                    } > */}
                    <div>
                    <div  className="single-leftsidediv">
                      <img src={item.image} alt="Not Found" />
                    </div>
                    <h2 className="single-modelName">{item.name}</h2>

                    <h2 className="single-Price-of-All">Deals Of The Day:  {item.price}</h2>


                    <h2>Specifications:</h2>
                      <ul>
                        <li>
                          <p className="single-detailpada-p">Brand:  {item.brand}</p>
                        </li>
                        <li>
                          <p className="single-detailpada-p">Type:{item.type}</p>
                        </li>
                        <li>
                          <p className="single-detailpada-p">Color:{item.color}</p>
                        </li>
                        <li>
                          <p className="single-detailpada-p">Category:{item.category}</p>
                        </li>
                       
                      </ul>


                    </div>





                    <button>
                       Buy Now
                      </button>
                     </div>
                      
                     
                    
                 
                    )
                })
            }
        </div>

    
    </>
  )
}



export default Dynamic;
