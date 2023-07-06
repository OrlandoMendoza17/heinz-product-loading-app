import React, {Dispatch, SetStateAction} from 'react'

type Cart = {
  cart: Product[],
  emptyCart: () => void,
  saveProduct: (product: Product) => void,
  updateProduct: (product: Product) => void,
  deleteGroup: (productGroup: string[]) => void,
  removeProduct: (productSKU: Product["sku"]) => void,
  selectedEmployees: Employee[],
  setSelectedEmployees: Dispatch<SetStateAction<Employee[]>>
}

const CartContext = React.createContext<Cart>({} as Cart)

export default CartContext;