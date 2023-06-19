import Header from '@/components/widgets/Header'
import Input from '@/components/widgets/Input'
import Switch from '@/components/widgets/Switch'
import React from 'react'

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
  
  const pedido = {
    pedido: "5685862",
    zona: "120",
    ficha: "1008473",
    cliente: "Mendoza Vargas, Orlando Manuel",
    fecha: "06/06/2023",
    cajas: "1.00",
    total_pedido: "0.14",
  }

  const orders: Pedido[] = new Array(10).fill(pedido)

  return (
    <div className="SelectEmployees px-4 md:px-24 pb-20">
      <Header />
      <main className="MyOrders pt-10 xl:px-60">
        <h1 className="MyOrders__title">Mis Ordenes</h1>
        <section>
          <div className="MyOrders__options pb-10">
            <Input id="search-order" title="Buscar" placeholder="10-12052023" />
            <Input id="date-from" title="Desde" type="date" />
            <Input id="date-to" title="Hasta" type="date" />
            <div className="switch-options">
              <Switch id="search3" label="Hoy" />
              <Switch id="search2" label="Boletín / Cliente" />
            </div>
          </div>
          <div className="overflow-x-scroll md:overflow-x-auto">
            <table className="Table" style={{minWidth: "860px"}}>
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
                  orders.map((order, i) =>
                    <tr key={i}>
                      <td className=" font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        {order.pedido}
                      </td>
                      <td className="font-bold">
                        {order.zona}
                      </td>
                      <td className="">
                        {order.ficha}
                      </td>
                      <td className="">
                        {order.cliente}
                      </td>
                      <td className="">
                        {order.fecha}
                      </td>
                      <td className="">
                        {order.cajas}
                      </td>
                      <td className="">
                        {order.total_pedido}
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
        </section>
      </main>
    </div>
  )
}

export default MyOrders