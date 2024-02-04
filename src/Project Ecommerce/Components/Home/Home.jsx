// import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import Data from '../../Data';
// import Card from '../Card/Card';
// import './Home.css';
// const Home = ({search,setShow2,setId}) => {
//   return (
//     <div className='Home'>
//         <Carousel>
//             {Data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
//                 return(
//                     <section style={{height:'600px', width:'80%',margin:'auto'}} key={item.id}>
//                         <div>
//                             <img src={item.image} />
//                             <p className="legend">
//                                 <h1>{item.title}</h1>
//                                 <p>{item.description}</p>
//                                 <p>{item.price}</p>
//                                 <p>{item.rating.rate}⭐</p>
//                                 <button>Add Cart</button>
//                             </p>
//                         </div>
//                     </section>
//                 )
//             })}
//         </Carousel>

//         <section>
//             {Data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
//                 return(
//                     <Card setId={setId} setShow2={setShow2} item={item} key={item.id}></Card>
//                 )
//             })}
//         </section>
//     </div>
//   )
// }

// export default Home


import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Data from "../../Data";
import Card from "../Card/Card";
import { useState } from "react";
import ProductPage from "../ProductPage/ProductPage";

const Home = ({search, setShow, handleClick}) => {
  const [fullPage, setFullPage] = useState(true)
  const [fullPageDetail, setFullPageDetail] = useState([])
  return (
    <div className="home">
      {(fullPage) 
      ? (
        <>
          <Carousel>
                {Data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
                    return(
                        <section style={{height:'685px', width:'90%',margin:'auto'}} key={item.id} >
                            <div>
                                <img className='carousel' src={item.image}/>
                                <div className="legend">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <p>${item.price}</p>
                                    <p>{item.rating.rate}⭐</p>
                                    <button onClick={()=>handleClick(item)}>Add Cart</button>
                                </div>
                            </div>
                        </section>
                    )
                })}
          </Carousel>

      <section className="cardSection">
        {Data.filter((e) => e.category.toLocaleLowerCase().includes(search)).map((e) => {
            return (
                <Card handleClick={handleClick} setFullPageDetail = {setFullPageDetail} setFullPage = {setFullPage} item={e}/>
            )
        })}
      </section>
        </>
      ) : (
        <ProductPage handleClick={handleClick} setFullPage = {setFullPage} fullPageDetail = {fullPageDetail} />
      )}
    </div>
  );
};

export default Home;
