import React from 'react'
import Data from '../../Data'

const CheckOut = ({id}) => {
    const actualData = Data.filter((item) => item.id === id)
  return (
    <div className='CheckOut'>
        

        <img src={actualData[0].image}></img>
    </div>
  )
}

export default CheckOut