import BillItem from '@/components/pages/factura/BillItem'
import Header from '@/components/widgets/Header/Header'
import CartContext from '@/context/CartContext'
import formatMoney, { getTotalFromProducts } from '@/utils/formatMoney'
import React, { useContext, useEffect, useState } from 'react'

const Billing = () => {

  const { cart, selectedEmployees, purchase } = useContext(CartContext)

  const [bills, setBills] = useState<Bill[]>([])

  useEffect(() => {
    let bills: Bill[] = []

    selectedEmployees.forEach(employee => {
      bills.push({
        purchase,
        employee,
        products: [...cart],
      })
    })

    setBills(bills)

  }, [])

  return (
    <div className="Layout">
      <Header />
      <main className="Bill xl:px-60">
        <section className="header">
          <ul className="">
            <li><span>Total número de ordenes:</span> {cart.length}</li>
            <li><span>Total cantidad de cajas:</span> 12</li>
            <li><span>Total monto de ordenes:</span> 12</li>
          </ul>
        </section>
        <section>
          {
            bills.map((bill) =>
              <BillItem {...bill}/>
            )
          }
        </section>
      </main>
    </div >
  )
}

export default Billing