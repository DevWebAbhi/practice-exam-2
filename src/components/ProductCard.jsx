import React from 'react'

const ProductCard = ({data}) => {
  return (
    <div>
        <img src={data.image} alt="" />
        <h4>{data.title}</h4>
        <p>{data.price}</p>
        <p>{data.description}</p>
    </div>
  )
}

export default ProductCard