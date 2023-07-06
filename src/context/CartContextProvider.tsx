"use client"
import { useState } from "react"
import CartContext from "./CartContext"

type Props = {
  children: React.ReactNode | JSX.Element[] | JSX.Element
}

const CartContextProvider = ({ children }: Props) => {

  const [cart, setCart] = useState<Product[]>([])
  const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([])

  const emptyCart = () => {
    setCart([])
  }

  const saveProduct = (product: Product) => {
    const found = Boolean(cart.find(item => item.sku === product.sku))

    if (!found) {
      setCart([...cart, product])
    }
  }

  const updateProduct = (updated: Product) => {
    setCart(
      cart.map(product => {
        return (product.sku === updated.sku) ? updated : product
      })
    )
  }

  const deleteGroup = (productGroup: string[]) => {
    const filteredCart = cart.filter(product => {
      return !productGroup.includes(product.sku.toString())
    })
    setCart(filteredCart)
  }

  const removeProduct = (productSKU: Product["sku"]) => {
    setCart(cart.filter(item => item.sku !== productSKU))
  }


  const value = {
    cart,
    selectedEmployees,
    emptyCart,
    saveProduct,
    updateProduct,
    deleteGroup,
    removeProduct,
    setSelectedEmployees,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;