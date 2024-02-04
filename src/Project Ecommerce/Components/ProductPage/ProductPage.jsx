import './ProductPage.css'

const ProductPage = ({fullPageDetail, setFullPage, handleClick}) => {
    console.log(fullPageDetail);
    const {title, image,price, description, rating } = fullPageDetail
   return (
    <div className='productDetail' >
        <button className='closebtn' onClick={() => setFullPage(true)}>⬅️</button>
        <div className="left">
            <img src={fullPageDetail.image} alt="" />
        </div>
        <div className="right">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{rating.rate}🌟</p>
            <h3>$ {price}</h3>
            <button onClick={handleClick} className='btn'>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductPage