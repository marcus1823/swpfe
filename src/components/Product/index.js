import React from 'react'
import './product.css'

const Product = ({data}) => {
    
  return (
    <div className='container-product' style={{backgroundImage: data.src}}>
        <div className='item-product'>
            <p>{data.name}</p>
            <p>{!data.total? data.price: data.total}</p>
        </div>
    </div>
  )
}

export default Product