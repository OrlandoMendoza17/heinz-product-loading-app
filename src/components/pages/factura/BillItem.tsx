import formatMoney, { getBoxQuantity, getTotalFromProducts } from '@/utils/formatMoney'
import React from 'react'

const BillItem = ({ employee, products, purchase }: Bill) => {
  
  const boxQuantity = getBoxQuantity(products)
  const total = formatMoney(getTotalFromProducts(products))
  
  return (
    <div className="BillItem">
      <div className="p-8">
        <div className="py-4 px-8 mb-4 bg-slate-100 flex justify-between items-center">
          <h3 className="text-lg font-bold">Información del Pedido</h3>
          <button type="button" className="text-white font-bold py-2 px-4 bg-secondary hover:bg-sky-500 rounded-lg">Modificar</button>
        </div>
        <div className="EmployeeBill__main-container px-8 py-8 bg-white">
          <ul>
            <li><span>Orden:</span> 5660921</li>
            <li><span>Cliente:</span> {employee.ficha} {employee.name}</li>
            <li><span>Dirección:</span> URB. Guacara, Loma Linda, 4ta Etapa, Calle 3-4, Casa B-61</li>
            <li><span>Zona:</span> 120</li>
            <li><span>Tipo de cliente:</span> 017</li>
            <li><span>Orden de compra:</span> {purchase.order}</li>
            <li><span>Fecha de Recepción:</span> {new Date(purchase.date).toLocaleDateString("es")}</li>
          </ul>
          <table className="w-full mt-8">
            <thead>
              <tr className="text-right">
                <th className="text-center">SKU</th>
                <th className="text-center">Descripción</th>
                <th>Cantidad</th>
                <th>Precio Base</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map(({ sku, name, quantity, price }) =>
                  <tr className="text-slate-500">
                    <td className="text-center font-medium">{sku}</td>
                    <td className="font-medium">{name}</td>
                    <td className="text-right">{quantity}</td>
                    <td className="text-right">{formatMoney(price)}</td>
                    <td className="text-right font-medium">{formatMoney(quantity * price)}</td>
                  </tr>
                )
              }
              <tr className="text-sky-700">
                <td></td>
                <td></td>
                <td className="text-right font-bold">{boxQuantity}</td>
                <td></td>
                <td className="text-right font-bold">{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default BillItem