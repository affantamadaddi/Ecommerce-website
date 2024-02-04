// import React from 'react'
// import './Card.css'

// const Card = ({item, setShow2, setId}) => {
//     const {title,price,image,rating,description}=item;

      // const handleImageClick = ()=>{
      //   setShow2(false)
      //   setId(id)
      // }

//   return (
//     <div className='Cards'>
//         <div className='card'>
//             <img onClick={handleImageClick} alt='' src={image} ></img>
//             <p>{title}</p>
//             <p>{price}</p>
//             <button>Add Cart</button>
//         </div>
//     </div>
//   )
// }

// export default Card

// ====================


import { useState } from "react";
import "./Card.css";

const Card = ({ item, setFullPage, setFullPageDetail, handleClick }) => {
  const { title, description, price, image, rating } = item;
  const [expand, setExpand] = useState(false);
  return (
    <div className="Card">
      <section
        onClick={() => {
          setFullPage(false);
          setFullPageDetail(item);
          console.log(item);
        }}
      >
        <img src={image} alt="" />
        <h5>{title}</h5>
        <h6>{rating.rate} 🌟</h6>
        <h5>$ {price}</h5>
      </section>
      
      {expand ? (
        <>
          <p className="desc">{description}</p>
          
        </>
      ) : (
        ""
      )}
      <div style={{ display: "flex", gap: "10px" }}>
      {expand ? (
        <button className="btn" onClick={() => setExpand(false)}>
        Collaps
      </button>
      ) : (
        <button className="btn" onClick={() => setExpand(true)}>
          Expand
        </button>
      )}
            <button onClick={()=>handleClick(item)} className="btn">Add To Cart</button>
          </div>
    </div>
  );
};

export default Card;

