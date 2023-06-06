"use client"
import { useState } from "react"
import CartContext from "./CartContext"

type Props = {
  children: React.ReactNode | JSX.Element[] | JSX.Element
}

const CartContextProvider = ({ children }: Props) => {

  const [cart, setCart] = useState<Product[]>([])

  const saveProduct = (product: Product) => {
    const found = Boolean(cart.find(item => item.sku === product.sku))
    
    if(!found){
      setCart([...cart, product])      
    }
  }

  const removeProduct = (productSKU: Product["sku"]) =>{
    setCart(cart.filter(item => item.sku !== productSKU))
  }
  
  const value = {
    cart,
    saveProduct,
    removeProduct,
  }
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;