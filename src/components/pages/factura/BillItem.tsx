import React, { useState, useContext } from 'react'
import BillsContext from '@/context/BillsContext'
import Link from 'next/link'
import ConfirmModal from '@/components/widgets/ConfirmModal'
import formatMoney, { getBoxQuantity, getTotalFromProducts } from '@/utils/formatMoney'
import useNotification from '@/hooks/useNotification'
import NotificationModal from '@/components/widgets/NotificationModal'
import { useRouter } from 'next/router'
import BillProductRow from './BillProductRow'

type Props = {
  bill: Bill,
  modify?: boolean,
}

const BillItem = ({ bill, modify = false }: Props) => {
  const { employee, products, purchase } = bill

  const router = useRouter()
  const { deleteBill } = useContext(BillsContext)

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
              <li><span>Orden:</span> <span className="text-red-500">5660921</span></li>
              <li><span>Cliente:</span> <span className="text-yellow-500">{employee.ficha} {employee.name}</span></li>
              <li><span>Dirección:</span> <span className="text-red-500">URB. Guacara, Loma Linda, 4ta Etapa, Calle 3-4, Casa B-61</span></li>
              <li><span>Zona:</span> <span className="text-red-500">120</span></li>
              <li><span>Tipo de cliente:</span> <span className="text-red-500">017</span></li>
              <li><span>Orden de compra:</span> {purchase.order}</li>
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