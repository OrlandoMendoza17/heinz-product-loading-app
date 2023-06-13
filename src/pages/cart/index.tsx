import React, { ChangeEventHandler, MouseEventHandler, useContext, useRef, useState } from 'react'
import { NextPage } from 'next'
import Header from '@/components/widgets/Header'
import CartContext from '@/context/CartContext'
import formatMoney from '@/utils/formatMoney'
import Checkbox from '@/components/widgets/Checkbox'
import Button from '@/components/widgets/Button'
import ProductRow from '@/components/pages/ProductRow'
import useNotification from '@/hooks/useNotification'
import ConfirmModal from '@/components/widgets/ConfirmModal'

const fields = [
  "SKU",
  "Descripcion",
  "Cantidad",
  "Precio Base",
  "Subtotal",
  // "Editar",
]
const Cart: NextPage = () => {
  
  const { cart, emptyCart, deleteGroup, removeProduct } = useContext(CartContext)

  const { notification, handleNotification } = useNotification()

  const handleOpenModal = () => {
    handleNotification.open({
      type: "warning",
      title: "Advertencia",
      message: "¿Estás seguro de eliminar del carrito los productos seleccionados?"
    })
  }

  const $form = useRef<HTMLFormElement>(null)

  const [selectedProducts, setProducts] = useState<string[]>([])
  const [selectedAll, setSelectedAll] = useState<boolean>(false)

  const setAllCheckbox = (value: boolean): HTMLInputElement[] => {
    type CheckboxType = NodeListOf<HTMLInputElement> | HTMLInputElement[]

    let nodesFromDOM: CheckboxType = []
    let inputs: HTMLInputElement[] = []

    if ($form.current) {
      nodesFromDOM = $form.current.querySelectorAll<HTMLInputElement>(`input[name="delete-product"]`)
      inputs = Array.from<HTMLInputElement>(nodesFromDOM)
    }

    inputs.forEach(input => input.checked = value);

    return inputs;
  }

  const handleSelectAll: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if ($form.current) {
      console.log(target.checked);

      setSelectedAll(target.checked)

      if (target.checked) {
        const inputs = setAllCheckbox(true)
        const values = inputs.map(input => input.value)
        setProducts(values)
      } else {
        setProducts([])
        setAllCheckbox(false)
      }
    }
  }

  const handleCheckbox: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (!target.checked) {
      setSelectedAll(false)
    }

    const found = selectedProducts.includes(target.value)

    if (!found) {
      setProducts([...selectedProducts, target.value])
    } else {
      setProducts(selectedProducts.filter(item => item !== target.value))
    }
  }

  const handleDelete = () => {
    setProducts([])
    if (selectedAll) {
      emptyCart()
    } else {
      deleteGroup(selectedProducts)
    }
  }

  const boxQuantity = (
    cart.reduce((accumulator, product) => {
      return accumulator + product.quantity
    }, 0)
  )

  const bill = formatMoney(
    cart.reduce((accumulator, product) => {
      return accumulator + (product.quantity * product.price)
    }, 0)
  )

  return (
    <div className="px-4 md:px-24 pb-20">
      <Header />
      <main className="Home grid justify-center">

        <form ref={$form}>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold pb-10">🛒 Carrito de Compras <span>({cart.length} items)</span></h1>
            {
              Boolean(selectedProducts.length) &&
              <Button onClick={handleOpenModal} className="font-bold !py-2" color="danger">
                Eliminar
              </Button>
            }
          </div>

          <table className="Table">
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
                <th className="px-6 py-3">
                  {
                    Boolean(cart.length) &&
                    <Checkbox name="delete-all" checked={selectedAll} onChange={handleSelectAll} />
                  }
                </th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map(product =>
                  <ProductRow
                    key={`${product.name.replace(" ", "-")}-${product.sku}`}
                    product={product}
                    handleCheckbox={handleCheckbox}
                  />
                )
              }
              {/*Bill Footer */}
              <tr>
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
                <td className="text-end font-bold text-secondary">
                  {bill}
                </td>
                <td className="atext-right"></td>
                <td className="w-4 p-4"></td>
              </tr>
            </tbody>
          </table>
        </form>

        <ConfirmModal
          button2
          notification={notification}
          acceptAction={handleDelete}
          closeModal={handleNotification.close}
        />
      </main>
    </div >
  )
}

export default Cart