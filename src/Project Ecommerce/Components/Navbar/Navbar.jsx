import React from 'react'
import './Navbar.css'


// const Navbar = ({setShow , setSearch, cartSize ,setShow2}) => {
  const Navbar = ({setShow , setSearch, cartSize}) => {

    // const handleMore=()=>{
    //   setShow(true)
    //   setShow2(Prev =>prev?true:true)
    // }

    // const handleCart = ()=>{
    //   setShow(false)
    //   setShow2(Prev =>prev?true:true)
    // }

  return (
    <div className='Navbar'>
    <nav className='navbar'> 
        <div>More</div>
        {/* <div onClick={handleMore}>More</div> */}
        <div onClick={()=>setShow(true)}>Home</div>
        <div>About</div>
        <div>Contact</div>
        <div><input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder='Search products here' /></div>
        <div onClick={()=>setShow(false)}>Cart<sup>{cartSize}</sup>🛒</div>
        {/* <div onClick={handleCart}}>Cart<sup>{cartSize}</sup>🛒</div> */}
    </nav>   
    </div>
  )
}

export default Navbar