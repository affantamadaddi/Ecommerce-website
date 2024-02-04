import React, { useState } from 'react'
import Navbar from './Project Ecommerce/Components/Navbar/Navbar'
import Cart from './Project Ecommerce/Components/Cart/Cart'
import Home from './Project Ecommerce/Components/Home/Home'
import CheckOut from './Project Ecommerce/Components/CheckOut/CheckOut'

const App = () => {

  const [show,setShow] = useState(true)
  const [search,setSearch] = useState("")
  const [cart,setCart] = useState([])

  // const [id,setId]= useState("")
  // const [show2,setShow2] = useState(true)

  function handleClick(item){
    setCart([...cart,item])
  }

  function handleChange(item,d){
    let arr = cart
    let ind = cart.indexOf(item)
    arr[ind].amount+=d
    setCart([...cart])
  }

  return (
    <div className='Navbar'>
      {/* <Navbar setShow2={setShow2} cartSize={cart.length} setSearch={setSearch} setShow={setShow}/> */}
      <Navbar cartSize={cart.length} setSearch={setSearch} setShow={setShow}/>
      {(show)?(<Home  search={search} handleClick={handleClick} setShow={setShow}/>):(<Cart cart={cart} setCart={setCart} handleChange={handleChange} />)}
      {/* {(show2)?(show)?(<Home setId={setId} setShow2={setShow2} search={search} handleClick={handleClick} setShow={setShow}/>):(<Cart cart={cart} setCart={setCart} />):(<CheckOut id={id}  />)} */}
    </div>
  )
}

export default App