import BillsContext from '@/context/BillsContext'
import useAvailableStock from '@/hooks/useAvailableStock'
import { getAvailableStock } from '@/utils'
import formatMoney from '@/utils/formatMoney'
import React, { ChangeEventHandler, useContext } from 'react'
import {FaTrash} from 'react-icons/fa6'

type Props = {
  modify: boolean,
  product: Product,
  employee: Employee,
}

const BillProductRow = ({ product, employee, modify }: Props) => {

  const { updateProduct, deleteProduct } = useContext(BillsContext)
  const { sku, name, quantity, price, available } = product

  const MIN_VALUE = 0.25
  const stock = useAvailableStock(available)

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const quantity = parseFloat(target.value)
    debugger
    if (quantity <= stock) {
      updateProduct({
        ...product,
        quantity: (quantity >= MIN_VALUE) ? quantity : MIN_VALUE,
      }, employee.ficha)
    }
  }

  return (
    <tr className="text-slate-500">
      <td className="text-center font-medium">{sku}</td>
      <td className="font-medium">{name}</td>

      {
        modify &&
        <td className="font-medium text-right">{stock}</td>
      }
      <td className="text-right">
        {
          modify ?
            <input
              id=""
              min={MIN_VALUE}
              step="0.25"
              name="product_quantity"
              type="number"
              value={quantity}
              placeholder='0.00'
              onChange={handleChange}
              className="border-gray-300 text-right px-2 py-1 border rounded-md w-28"
            />
            :
            quantity
        }
      </td>
      <td className="text-right">{formatMoney(price)}</td>
      <td className="text-right font-medium">{formatMoney(quantity * price)}</td>
      {
        modify &&
        <td className="text-right font-semibold">
          <button onClick={() => deleteProduct(product.sku, employee.ficha)}><FaTrash className=" hover:fill-red-700 inline-block"/></button>
        </td>
      }
    </tr>
  )
}

export default BillProductRow