import React from 'react'
import Stars from './Stars'

const Product = ({ name, sku, quantity, price, image }:Product) => {
  return (
    <div className="Product ">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="Product-info">
        <div className="">
          <h4 className="text-base text-gray-900 font-bold pb-2">{name}</h4>
          <small className="block text-sm">SKU: <span className="font-bold">{sku}</span></small>
          <small className="block text-sm">Disponible: <span className="font-bold">{quantity}</span></small>
          <small className="block text-gray-700 text-sm">Precio: <span className="font-bold">${price}</span></small>
        </div>
        <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
          Añadir 
        </button>
      </div>
    </div>

  )
}

export default Product