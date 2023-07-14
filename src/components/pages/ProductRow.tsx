import CartContext from '@/context/CartContext'
import formatMoney from '@/utils/formatMoney'
import React, { ChangeEventHandler, useContext } from 'react'
import ConfirmModal from '../widgets/ConfirmModal'
import useNotification from '@/hooks/useNotification'
import { getAvailableStock } from '@/utils'
import NotificationModal from '../widgets/NotificationModal'

type Props = {
  product: Product,
  handleCheckbox: ChangeEventHandler<HTMLInputElement>,
}

const ProductRow = ({ product, handleCheckbox }: Props) => {

  const { selectedEmployees, updateProduct, removeProduct } = useContext(CartContext)

  const notificationProps = useNotification()
  const { handleNotification } = notificationProps
  
  const alertProps = useNotification()
  const { handleNotification: handleAlert } = alertProps

  const { name, price, sku, quantity, available } = product

  const MIN_VALUE = 0.25
  const stock = getAvailableStock(available, selectedEmployees.length)

  const handleOpenModal = () => {
    handleNotification.open({
      type: "warning",
      title: "Advertencia",
      message: "¿Estás seguro de eliminar el producto del carrito?"
    })
  }

  const handleAccept = () => {
    removeProduct(sku)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (target.name === "product_quantity") {
      const quantity = parseFloat(target.value)
      debugger
      if (quantity <= stock) {
        updateProduct({
          ...product,
          quantity: (quantity >= 0.25) ? quantity : MIN_VALUE,
        })
      }
    }
  }

  const productQuantity = quantity ? quantity : MIN_VALUE

  return (
    <>
      <tr key={`${name.split(" ").join("-")}-${sku}`}>
        <td className="font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {sku}
        </td>
        <td className="font-bold">
          {name}
        </td>
        <td title={`Stock límite disponible para cada empleado (${selectedEmployees.length})`}>
          {stock}
        </td>
        <td className="">
          <input
            id=""
            min={MIN_VALUE}
            step="0.25"
            name="product_quantity"
            type="number"
            value={productQuantity}
            placeholder='0.00'
            onChange={handleChange}
            className="border-gray-300 px-2 py-1 border rounded-md w-28"
          />
        </td>
        <td className="">
          {formatMoney(price)}
        </td>
        <td className="">
          {formatMoney(quantity * price)}
        </td>
        <td className="atext-right">
          <button type="button" tabIndex={-1} onClick={handleOpenModal}>
            🗑 Eliminar
          </button>
        </td>
        <td className="w-5 p-4">
          <input type="checkbox" tabIndex={-1} name="delete-product" value={sku} onChange={handleCheckbox} />
        </td>
      </tr>
      <ConfirmModal
        acceptAction={handleAccept}
        {...notificationProps}
      />
      <NotificationModal {...alertProps}/>
    </>
  )
}


export default ProductRow