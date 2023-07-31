import Header from '@/components/widgets/Header/Header'
import Input from '@/components/widgets/Input'
import { shortDate } from '@/utils/parseDate'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

type Pedido = {
  pedido: string;
  zona: string;
  ficha: string;
  cliente: string;
  fecha: string;
  cajas: string;
  total_pedido: string;
}

const MyOrders = () => {

  const fields = [
    "Pedido",
    "Zona",
    "Ficha",
    "Cliente",
    "Fecha",
    "Cajas",
    "Total Pedido",
  ]

  const [loading, setloading] = useState<boolean>(false)
  
  const [dates, setDates] = useState({ 
    dateFrom: "2023-07-15", 
    dateTo: "2023-07-30",
  })
  
  
  const [bulletins, setBulletins] = useState<Bulletin[]>([])

  const pedido = {
    pedido: "5685862",
    zona: "120",
    ficha: "1008473",
    cliente: "Mendoza Vargas, Orlando Manuel",
    fecha: "06/06/2023",
    cajas: "1.00",
    total_pedido: "0.14",
  }

  useEffect(() => {
    searchBulletins()
  }, [])

  const searchBulletins = async () => {
    try {
      const body = { dateFrom: "2023-07-15", dateTo: "2023-07-30" }
      const { data } = await axios.post<Bulletin[]>("/api/boletin", body)
      console.log('data', data)
      setBulletins(data)
    } catch (error) {
      console.log('error', error)
    }
  }
  
  return (
    <div className="SelectEmployees Layout">
      <Header />
      <main className="MyOrders pt-10 xl:px-60">
        <h1 className="MyOrders__title">Mis Ordenes</h1>
        <section>
          <div className="MyOrders__options pb-10">
            <Input id="search-order" title="Buscar" placeholder="10-12052023" />
            <Input id="date-from" title="Desde" type="date" />
            <Input id="date-to" title="Hasta" type="date" />
          </div>
          {
            loading ?
              <div className="py-20">
                Cargando...
              </div>
              :
              <div className="overflow-x-scroll md:overflow-x-auto">
                <table className="Table" style={{ minWidth: "860px" }}>
                  <thead>
                    <tr>
                      {
                        fields.map((name, i) =>
                          <th key={`${name}-${i}`} className="px-6 py-3">
                            <span>{name}</span>
                          </th>
                        )
                      }
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      bulletins.map((bulletin, i) =>
                        <tr key={i}>
                          <td className=" font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {bulletin.number}
                          </td>
                          <td className="font-bold">
                            {bulletin.zone}
                          </td>
                          <td className="">
                            {bulletin.ficha}
                          </td>
                          <td className="">
                            {bulletin.name}
                          </td>
                          <td className="">
                            {shortDate(bulletin.date)}
                          </td>
                          <td className="">
                            {/* {bulletin.cajas} */}
                          </td>
                          <td className="">
                            {/* {bulletin.total_pedido} */}
                          </td>
                          <td className="grid grid-cols-2 gap-4">
                            <button type="button">
                              🛒
                            </button>
                            <button type="button">
                              📋
                            </button>
                          </td>

                          {/* <td className="atext-right">
                      <button type="button">
                        🗑 Eliminar
                      </button>
                    </td> */}
                          {/* <td className="w-4 p-4">
                      <Checkbox name="delete-product" value={sku} onChange={handleCheckbox} />
                    </td> */}

                        </tr>
                      )
                    }
                    {/*Bill Footer */}
                    {/* <tr>
                <td className=" font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  -
                </td>
                <td className="font-bold text-secondary">
                  Total
                </td>
                <td className="text-end font-bold text-secondary !pr-12">
                  {boxQuantity}
                </td>
                <td className=""></td>
                <td className=" font-bold text-secondary">
                  {bill}
                </td>
                <td className="atext-right"></td>
                <td className="w-4 p-4"></td>
              </tr> */}
                  </tbody>
                </table>
              </div>
          }
        </section>
      </main>
    </div>
  )
}

export default MyOrders