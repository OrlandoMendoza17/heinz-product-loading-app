import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'

type Props = {
  product: Product,
}

const ProductItem = ({ product }: Props) => {

  const { cart, saveProduct, removeProduct } = useContext(CartContext)

  const { name, sku, quantity, price, image } = product

  const found = Boolean(cart.find(item => item.sku === sku))

  const handleClick = () => {
    if (found) {
      removeProduct(product.sku)
    } else {
      saveProduct(product)
    }
  }

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
        <button
          onClick={handleClick}
          className={`px-3 py-2 ${found ? "bg-green-500" : "bg-gray-800"} text-white text-xs font-bold uppercase rounded`}
        >
          {found ? "Añadido" : "Añadir"}
        </button>
      </div>
    </div>

  )
}

export default ProductItem