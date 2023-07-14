import BillItem from '@/components/pages/factura/BillItem'
import Header from '@/components/widgets/Header/Header'
import CartContext from '@/context/CartContext'
import formatMoney, { getTotalBoxesFromProducts, getTotalFromProducts } from '@/utils/formatMoney'
import React, { useContext, useEffect, useState } from 'react'
import products from '../api/products'
import BillsContext from '@/context/BillsContext'
import { useRouter } from 'next/router'

const Billing = () => {

  const { cart, selectedEmployees, purchase } = useContext(CartContext)
  const { bills, setBills } = useContext(BillsContext)

  const router = useRouter()
  
  useEffect(() => {
    if(!bills.length) router.push("/")
  }, [])


  const getTotalFromBills = () => {
    const total = bills.reduce((accumulator, { products }) => {
      const totalOrder = getTotalFromProducts(products)
      return accumulator + totalOrder;
    }, 0)
    return total;
  }

  const getTotalBoxesFromBills = () => {
    const totalBoxes = bills.reduce((accumulator, { products }) => {
      const boxes = getTotalBoxesFromProducts(products)
      return accumulator + boxes;
    }, 0)
    return totalBoxes;
  }

  const totalOrders = getTotalFromBills()
  const totalBoxes = getTotalBoxesFromBills()

  return (
    <>
      {
        Boolean(bills.length) &&
        <div className="Layout">
          <Header />
          <main className="Bill xl:px-60">
            <section className="header">
              <h1 className="text-4xl font-bold mb-10">Confirmar Pedido</h1>
                <ul className="">
                  <li><span>Total número de ordenes:</span> {bills.length}</li>
                  <li><span>Total cantidad de cajas:</span> {totalBoxes}</li>
                  <li><span>Total monto de ordenes:</span> {formatMoney(totalOrders)}</li>
                </ul>
            </section>
            <section>
              {
                bills.map((bill) =>
                  <BillItem bill={bill} key={bill.employee.ficha} />
                )
              }
            </section>
          </main>
        </div >
      }
    </>
  )
}

export default Billing