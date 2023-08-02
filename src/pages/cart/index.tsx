import React, { ChangeEventHandler, FormEventHandler, MouseEventHandler, useContext, useRef, useState } from 'react'
import { NextPage } from 'next'
import Header from '@/components/widgets/Header/Header'
import CartContext from '@/context/CartContext'
import formatMoney, { getBoxQuantity, getTotalFromProducts } from '@/utils/formatMoney'
import Checkbox from '@/components/widgets/Checkbox'
import Button from '@/components/widgets/Button'
import ProductRow from '@/components/pages/ProductRow'
import useNotification from '@/hooks/useNotification'
import ConfirmModal from '@/components/widgets/ConfirmModal'
import { useRouter } from 'next/router'
import { FaArrowRightLong } from 'react-icons/fa6'
import NotificationModal from '@/components/widgets/NotificationModal'
import BillsContext from '@/context/BillsContext'
import { getBulletinNextNumber } from '@/services/boletin'

const fields = [
  "SKU",
  "Descripcion",
  "Stock",
  "Cantidad",
  "Precio Base",
  "Subtotal",
  // "Editar",
]

const Cart: NextPage = () => {

  const router = useRouter()
  
  const { setBills } = useContext(BillsContext)
  const { cart, selectedEmployees, purchase, emptyCart, deleteGroup } = useContext(CartContext)
  
  const notificationProps = useNotification()
  const { handleNotification } = notificationProps
  
  const alertProps = useNotification()
  const { handleNotification: handleAlert } = alertProps
  
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

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    if (!cart.length) {
      debugger
      handleAlert.open({
        type: "danger",
        title: "Carrito Vacío",
        message: "Debes tener al menos 1 producto en el carrito para poder avanzar",
      })
    } else {
      const nextNumber = await getBulletinNextNumber()
      
      const bills: Bill[] = selectedEmployees.map((employee, i) => {
        return ({
          number: (nextNumber + i),
          purchase,
          employee,
          products: [...cart],
        })
      })
      setBills(bills)
      router.push("/factura")
    }
  }

  const boxQuantity = getBoxQuantity(cart)
  const bill = formatMoney(getTotalFromProducts(cart))

  return (
    <>
      <div className="Layout">
        <Header />
        <main className="Home xl:px-60">
          <form ref={$form} onSubmit={handleSubmit}>
            <div className="flex justify-between items-center pb-10">
              <h1 className="text-xl x_sm:text-2xl font-bold">
                🛒 Carrito de Compras <span>({cart.length}<span className="hidden xx_sm:inline"> items</span>) </span>
                <span>({selectedEmployees.length} empleados)</span>
              </h1>
              {
                Boolean(selectedProducts.length) &&
                <Button onClick={handleOpenModal} className="font-bold !text-xs !py-2" color="danger">
                  <span className="block xx_sm:hidden">🗑</span>
                  <span className="hidden xx_sm:block">Eliminar</span>
                </Button>
              }
            </div>

            <div className="overflow-x-scroll md:overflow-x-auto">
              <table className="Table" style={{ minWidth: "768px" }}>
                <thead>
                  <tr>
                    {
                      fields.map((name, i) =>
                        <th key={`${name}-${i}`} className="px-6 py-3">
                          <span>{name}</span>
                        </th>
                      )
                    }
                    <th className="w-44"></th>
                    <th className="px-6 py-3">
                      {
                        Boolean(cart.length) &&
                        <input type="checkbox" name="delete-all" checked={selectedAll} onChange={handleSelectAll} />
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
                    <td className="font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      -
                    </td>
                    <td className="font-bold text-secondary">
                      Total
                    </td>
                    <td className=""></td>
                    <td className="font-bold text-secondary !pl-8">
                      {boxQuantity}
                    </td>
                    <td className=""></td>
                    <td className=" font-bold text-secondary">
                      {bill}
                    </td>
                    <td className="atext-right"></td>
                    <td className="w-4 p-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-end pt-8">
              <Button
                // onClick={() => router.push("/seleccionar-empleados")}
                type="submit"
                color="info"
                className="font-bold !px-10 flex gap-4 items-center">
                Siguiente <FaArrowRightLong className="mt-1" size={14} />
              </Button>
            </div>
          </form>
        </main>
      </div >
      <ConfirmModal
        acceptAction={handleDelete}
        {...notificationProps}
      />
      <NotificationModal {...alertProps}/>
    </>
  )
}

export default Cart