import React, { useState, useContext, ChangeEventHandler } from 'react'
import BillsContext from '@/context/BillsContext'
import Link from 'next/link'
import ConfirmModal from '@/components/widgets/ConfirmModal'
import formatMoney, { getBoxQuantity, getTotalFromProducts } from '@/utils/formatMoney'
import useNotification from '@/hooks/useNotification'
import NotificationModal from '@/components/widgets/NotificationModal'
import { useRouter } from 'next/router'
import BillProductRow from './BillProductRow'
import Input from '@/components/widgets/Input'

type Props = {
  bill: Bill,
  modify?: boolean,
}

const BillItem = ({ bill, modify = false }: Props) => {
  const { employee, products, purchase } = bill

  const router = useRouter()
  const { deleteBill, updatePurchase } = useContext(BillsContext)

  const notificationProps = useNotification()
  const { notification, handleNotification } = notificationProps

  const alertProps = useNotification()
  const { notification: alert, handleNotification: handleAlert } = alertProps

  const boxQuantity = getBoxQuantity(products)
  const total = formatMoney(getTotalFromProducts(products))

  const handleDelete = () => {
    handleNotification.open({
      title: "¡Precaución!",
      type: "warning",
      message: "¿Estás seguro de querer eliminar este pedido?",
    })
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target
    updatePurchase({ ...purchase, [name]: value }, employee.ficha)
  }

  const buttonStyles = "text-white font-bold py-2 px-4 bg-secondary hover:bg-sky-500 rounded-lg"

  return (
    <>
      <div className="BillItem">
        <div className="p-8">
          <div className="py-4 px-8 mb-4 bg-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-bold">Información del Pedido</h3>
            {
              modify ?
                <button onClick={handleDelete} className={buttonStyles}>
                  Eliminar
                </button>
                :
                <Link href={`/factura/${employee.ficha}`} className={buttonStyles}>
                  Modificar
                </Link>
            }
          </div>
          <div className="EmployeeBill__main-container px-8 py-8 bg-white">
            <ul>
              <li><span>Orden:</span> {bill.number}</li>
              <li><span>Ficha:</span> {employee.ficha}</li>
              <li><span>Nombre:</span> {employee.name}</li>
              <li><span>Dirección:</span> {employee.address}</li>
              <li><span>Zona:</span> {employee.zone}</li>
              <li><span>Tipo de cliente:</span> {employee.clientType}</li>
              <li className="flex items-center gap-4">
                <span>Orden de compra:</span>
                {
                  !modify ?
                    purchase.order :
                    <input
                      name="order"
                      placeholder="📄 12-12052023"
                      className="border-gray-300 px-2 py-1 border rounded-md w-48"
                      value={purchase.order}
                      onChange={handleChange}
                    />
                }
              </li>
              <li><span>Fecha de Recepción:</span> {new Date(purchase.date).toLocaleDateString("es")}</li>
            </ul>
            <table className="w-full mt-8">
              <thead>
                <tr className="text-right">
                  <th className="text-center">SKU</th>
                  <th className="text-center">Descripción</th>
                  {
                    modify &&
                    <th className="">Stock</th>
                  }
                  <th>Cantidad</th>
                  <th>Precio Base</th>
                  <th>Subtotal</th>
                  {
                    modify &&
                    <th></th>
                  }
                </tr>
              </thead>
              <tbody>
                {
                  products.map((product,) =>
                    <BillProductRow
                      modify={modify}
                      product={product}
                      employee={employee}
                    />
                  )
                }
                <tr className="text-sky-700">
                  <td></td>
                  <td></td>
                  {
                    modify &&
                    <td></td>
                  }
                  <td className="text-right font-bold">{boxQuantity}</td>
                  <td></td>
                  <td className="text-right font-bold">{total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ConfirmModal
        {...notificationProps}
        acceptAction={() => {
          deleteBill(employee.ficha)
          router.push("/factura")
        }}
      />
      <NotificationModal {...alertProps} />
    </>
  )
}

export default BillItem