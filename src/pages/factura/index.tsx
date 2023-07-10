import Header from '@/components/widgets/Header/Header'
import CartContext from '@/context/CartContext'
import formatMoney from '@/utils/formatMoney'
import React, { useContext } from 'react'

const Bill = () => {

  const { cart, selectedEmployees, purchase } = useContext(CartContext)



  return (
    <div className="Layout">
      <Header />
      <main className="Bill xl:px-60">
        <section className="header">
          <ul className="">
            <li><span>Total número de ordenes:</span> 12</li>
            <li><span>Total cantidad de ordenes:</span> 12</li>
            <li><span>Total monto de ordenes:</span> 12</li>
          </ul>
        </section>
        <section>
          {
            selectedEmployees.map((employee) =>
              <div className="EmployeeBill">
                <div className="p-8">
                  <div className="py-4 px-8 mb-4 bg-slate-100 flex justify-between items-center">
                    <h3 className="text-lg font-bold">Información del Pedido</h3>
                    <button className="text-white font-bold py-2 px-4 bg-secondary hover:bg-sky-500 rounded-lg">Modificar</button>
                  </div>
                  <div className="EmployeeBill__main-container px-8 py-8 bg-white">
                    <ul>
                      <li><span>Orden:</span> 5660921</li>
                      <li><span>Cliente:</span> 27.313.279 Mendoza Vargas, Orlando Manuel</li>
                      <li><span>Dirección:</span> URB. Guacara, Loma Linda, 4taa Etapa, Calle 3-4, Casa B-61</li>
                      <li><span>Zona:</span> 120</li>
                      <li><span>Tipo de cliente:</span> 017</li>
                      <li><span>Orden de compra:</span> {purchase.order}</li>
                      <li><span>Fecha de Recepción:</span> {purchase.date}</li>
                    </ul>
                    <table className="w-full mt-8">
                      <thead>
                        <tr>
                          <th>SKU</th>
                          <th>Descripción</th>
                          <th>Cantidad</th>
                          <th>Precio Base</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          cart.map(({ sku, name, quantity, price }) =>
                            <tr>
                              <td className="text-center font-medium">{sku}</td>
                              <td>{name}</td>
                              <td className="text-right">{quantity}</td>
                              <td className="text-right">{formatMoney(price)}</td>
                              <td className="text-right font-medium">{formatMoney(quantity * price)}</td>
                            </tr>
                          )
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
          }
        </section>
      </main>
    </div >
  )
}

export default Bill