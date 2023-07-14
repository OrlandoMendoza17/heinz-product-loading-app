import React, { ReactNode, useState } from 'react'
import BillsContext from './BillsContext'

type Props = {
  children: ReactNode,
}

const BillsContextProvider = ({ children }: Props) => {

  const [bills, setBills] = useState<Bill[]>([])

  const findBill = (ficha: number) => {
    const foundBill = bills.find(({ employee }) => employee.ficha === ficha)
    return foundBill;
  }

  const deleteBill = (ficha: number) => {
    const filteredBills = bills.filter(({ employee }) => employee.ficha !== ficha)
    debugger
    setBills(filteredBills)
  }

  const updateProduct = (modified: Product, ficha: number) => {
    const foundBill = bills.find(bill => bill.employee.ficha === ficha)
    debugger
    if (foundBill) {
      foundBill.products = foundBill.products.map(product =>
        (product.sku === modified.sku) ? modified : product
      )
      setBills(bills.map(bill => (bill.employee.ficha === ficha) ? foundBill : bill))
    }
  }
  
  const deleteProduct = (productID: Product["sku"], ficha: number) => {
    const foundBill = bills.find(bill => bill.employee.ficha === ficha)
    if(foundBill){
      foundBill.products = foundBill.products.filter(product => product.sku !== productID)
      setBills(bills.map(bill => (bill.employee.ficha === ficha) ? foundBill : bill))
    }
  }

  const value = {
    bills,
    setBills,
    findBill,
    deleteBill,
    updateProduct,
    deleteProduct,
  }

  return (
    <BillsContext.Provider value={value}>
      {children}
    </BillsContext.Provider>
  )
}

export default BillsContextProvider