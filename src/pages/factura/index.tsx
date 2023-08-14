import BillItem from '@/components/pages/factura/BillItem'
import Header from '@/components/widgets/Header/Header'
import CartContext from '@/context/CartContext'
import formatMoney, { getTotalBoxesFromProducts, getTotalFromProducts, parseDecimals } from '@/utils/formatMoney'
import React, { useContext, useEffect, useState } from 'react'
import BillsContext from '@/context/BillsContext'
import { useRouter } from 'next/router'
import { getBulletinNextNumber, sendBulletin } from '@/services/boletin'
import { BulletinsFormat, getBulletinHeadersQuery, getBulletinInfoQuery } from '@/utils/getQueries'

const Billing = () => {

  const router = useRouter()

  const { cart, selectedEmployees, purchase } = useContext(CartContext)
  const { bills, setBills } = useContext(BillsContext)

  useEffect(() => {
    (async () => {

      if (!bills.length) {
        router.push("/")
      }

    })()
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

  const handleClick = async () => {

    const bulletins: BulletinsFormat = bills.map((bill) => {

      const { purchase, employee, products } = bill

      const headers = products.map(({ sku, name, price, quantity, details }): BulletinHeader => {
        const { IBITM, UMCONV, IMSRP1, IMSRP2, IMSRP3, IMSRP4 } = details
        return {
          ODJOBN: "",        // 🟨 ID de el Boletín
          ODUSER: "MLUCENA", // ⬜ Usuario
          ODEDOC: bill.number,
          ODLITM: sku,
          ODDSC1: name,
          ODSOQS: quantity,
          ODUPRC: price,
          ODAMXT: parseDecimals(price * quantity),
          ODEDCT: "BV",
          ODEKCO: "07200",
          ODMCU: "VE03", // Almacén
          ODLTTR: "999", // Estado (999 = No concretado | 010 = Concretado)
          ODNXTR: "999", // Estado (999 = No concretado | 020 = Concretado)
          ODTMST: purchase.date,
          ODAN8: employee.ficha,
          ODAC03: employee.zone,
          ODITM: IBITM,
          ODCONV: UMCONV, // Factor de conversión
          ODSRP1: IMSRP1, // Codigos de categoria y línea de producto
          ODSRP2: IMSRP2, // Codigos de categoria y línea de producto
          ODSRP3: IMSRP3, // Codigos de categoria y línea de producto
          ODSRP4: IMSRP4, // Codigos de categoria y línea de producto
          ODPRGR: IMSRP1, // Codigos de categoria y línea de producto
          ODZON: "",  // Valor siempre vacío
          ODASN: "",  // Valor siempre vacío
          ODFVTR: 0.0000, // Tipo de conversión (valor fijo)
        }
      })

      const info: BulletinInfo = {
        WOJOBN: "",        // 🟨 ID de Boletin 
        WOUSER: "MLUCENA", // ⬜ Usuario
        WOEDOC: bill.number,
        WOAN8: employee.ficha,
        WOALPH: employee.name,
        WOADD1: employee.address,
        WOAC03: employee.zone,
        WOAC05: employee.clientType,
        WOVR01: purchase.order,
        WODEL1: purchase.details,
        WOTRDJ: purchase.date,
        WOURDT: purchase.date,  // Fecha igual a WOTRDJ
        WOTMSTP: purchase.date, // Fecha igual a WOTRDJ pero con tiempo espec�fico de la creaci�n
        WODRQJ: "",        // Otra Fecha 🟨
        WOMCU: "VE03",     // Almacén
        WOEDCT: "BV",      // Tipo de documento
        WOEKCO: "07200",   // Código de la compáñia heinz
        WOASN: "VTASUBCL", // Ventas sub clasificadas
        WOAAT1: "Z1",
        WOCPGP: "", // Valor siempre vacío
        WOZON: "",  // Valor siempre vacío
      }

      return { headers, info }
    })

    // const headersQuery = getBulletinHeadersQuery(bulletins)
    // const infoQuery = getBulletinInfoQuery(bulletins)
    
    // console.log(headersQuery)
    // console.log(infoQuery)
    
    // await sendBulletin(bulletins)
  }

  return (
    <>
      {
        Boolean(bills.length) &&
        <div className="Layout">
          <Header />
          <main className="Bill xl:px-60">
            <section className="header">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold mb-10">Confirmar Pedido</h1>
                <button onClick={handleClick}>Confirmar</button>
              </div>
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