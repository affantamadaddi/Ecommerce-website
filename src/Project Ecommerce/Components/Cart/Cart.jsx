import React, { useEffect, useState } from 'react'
import './Cart.css';
import GooglePayButton from "@google-pay/button-react"

const Cart = ({cart,setCart ,handleChange}) => {

  const [price,setPrice] = useState(0)

  function handlePrice(){
    let ans=0
    cart.map(item=> ans+=item.price*item.amount)
    setPrice(ans)
  }

  useEffect(()=>{
    handlePrice()
  })

  function handleRemove(id){
    const arr=cart.filter(item=> item.id !== id)
    setCart(arr)
  }

  // function handleAmount(item,){
  //   item.amount+=1;
  // }

  return (
    <div>
      <table className='table' width={'100%'} style={{border:"1px", textAlign:'center'}} rules = 'all'>
        <thead className='row'>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Incre</th>
            <th>Qty</th>
            <th>Decr</th>
            <th>Total Price</th>
            <th className='remove'>Remove</th>

          </tr>
        </thead>

        <tbody>
          {
            cart && cart.map((item)=>{
              return(
                <tr key={item.id} >
                  <td><img src={item.image} height={'80px'} width={'80px'}></img></td>
                  <td>{item.title}</td>
                  <td ><button onClick={()=>handleChange(item,1)}>+</button></td>
                  <td>{item.amount}</td>
                  <td><button onClick={()=>handleChange(item,-1)}>-</button></td>
                  <td>{item.price}</td>
                  <td><button onClick={()=>handleRemove(item.id)}>Remove</button></td>
                </tr>
              )
            })
          }
        </tbody>
        <tfoot>
          <tr>
            <td>Total Price</td>
            <td colSpan={5}>{price}</td>
            <td><button>

            <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>

              </button></td>
          </tr>
        </tfoot>

      </table>
    </div>
  )
}

export default Cart