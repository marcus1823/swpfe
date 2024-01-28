import React from 'react'
import Product from '../Product'
import './hot-category.css'

const HotCategory = ({data, title}) => {

  return (
    <div className='container-hot-category'>
        <p>{title}</p>
        <div>
        {data.map((item)=>(
            <Product data={item} key={item.name}/>
        ))}
        </div>
        
    </div>
  )
}

export default HotCategory