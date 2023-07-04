import CartContext from '@/context/CartContext'
import formatMoney from '@/utils/formatMoney'
import React, { ChangeEventHandler, useContext } from 'react'
import ConfirmModal from '../widgets/ConfirmModal'
import useNotification from '@/hooks/useNotification'

type Props = {
  product: Product,
  handleCheckbox: ChangeEventHandler<HTMLInputElement>,
}

const ProductRow = ({ product, handleCheckbox }: Props) => {

  const { updateProduct, removeProduct } = useContext(CartContext)

  const { notification, handleNotification } = useNotification()

  const handleOpenModal = () => {
    handleNotification.open({
      type: "warning",
      title: "Advertencia",
      message: "¿Estás seguro de eliminar el producto del carrito?"
    })
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (target.name === "product_quantity") {
      const quantity = parseFloat(target.value)
      const EMPTY_VALUE = 0
      updateProduct({
        ...product,
        quantity: (quantity >= 0) ? quantity : EMPTY_VALUE,
      })
    }
  }

  const { name, price, sku, quantity } = product

  return (
    <>
      <tr key={`${name.split(" ").join("-")}-${sku}`}>
        <td className="font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {sku}
        </td>
        <td className="font-bold">
          {name}
        </td>
        <td className="">
          <input
            id=""
            min={0}
            step="0.25"
            name="product_quantity"
            type="number"
            value={quantity}
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
        {...{
          button2: true,
          notification,
          closeModal: handleNotification.close,
          acceptAction: () => removeProduct(sku),
        }}
      />
    </>
  )
}


export default ProductRow