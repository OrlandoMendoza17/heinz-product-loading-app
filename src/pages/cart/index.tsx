import React, { useContext } from 'react'
import { NextPage } from 'next'
import Header from '@/components/widgets/Header'
import CartContext from '@/context/CartContext'

const Cart: NextPage = () => {

  const { cart, removeProduct } = useContext(CartContext)

  const fields = [
    "SKU",
    "Descripcion",
    "Cantidad",
    "Precio Base",
    "Descuento",
    "Subtotal",
    // "Editar",
  ]



  return (
    <div className="px-4 md:px-24 pb-20">
      <Header />
      <main className="Home">
        <h1 className="text-2xl font-bold pb-10">🛒 Carrito de Compras <span>({cart.length} items)</span></h1>

        <table className="Table">
          <thead>
            <tr>
              {
                fields.map(name =>
                  <th className="px-6 py-3">
                    <span>{name}</span>
                  </th>
                )
              }
              <th></th>
              <th className="px-6 py-3">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map(({ name, price, sku, discount }) =>
                <tr>
                  <td className=" font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {sku}
                  </td>
                  <td className="font-bold">
                    {name}
                  </td>
                  <td className="">
                    <input type="number"placeholder='0.00' className="border-gray-300 pl-2 py-1 text-right border rounded-md w-28" name="" id="" />
                  </td>

                  <td>$ {price}</td>
                  <td>$ {discount}</td>
                  <td>$ {price}</td>

                  <td className="atext-right">
                    <button onClick={() => removeProduct(sku)}>🗑 Eliminar</button>
                  </td>

                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>

      </main>
    </div>
  )
}

export default Cart