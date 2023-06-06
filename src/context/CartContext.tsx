import React from 'react'

type Cart = {
  cart: Product[],
  saveProduct: (product: Product) => void,
  removeProduct: (productSKU: Product["sku"]) => void,
}

const CartContext = React.createContext<Cart>({} as Cart)

export default CartContext;