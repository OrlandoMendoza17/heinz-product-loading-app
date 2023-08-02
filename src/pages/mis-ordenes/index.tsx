import { subWeeks } from 'date-fns'
import Header from '@/components/widgets/Header/Header'
import Input from '@/components/widgets/Input'
import { TODAY, formatDateString, shortDate } from '@/utils/parseDate'
import React, { useState, useEffect, ChangeEventHandler, FormEventHandler } from 'react'
import Switch from '@/components/widgets/Switch'
import Button from '@/components/widgets/Button'
import { getBulletinInfo, getBulletins } from '@/services/boletin'
import Spinner from '@/components/widgets/Spinner'
import NotificationModal from '@/components/widgets/NotificationModal'
import useNotification from '@/hooks/useNotification'
import { BulletinsProps } from '../api/boletin'
import Modal from '@/components/widgets/Modal'
import BulletinDetailsModal from '@/components/pages/mis-ordenes/BulletinDetailsModal'
import { BulletinHeader } from '../api/boletin/info'

enum OPTIONS {
  DATE = 1,
  BOLETIN_NUMBER = 2,
}

const { DATE, BOLETIN_NUMBER } = OPTIONS

const MyOrders = () => {

  const fields = [
    "Pedido",
    "Zona",
    "Ficha",
    "Cliente",
    "Fecha",
    "Cajas",
    "Total Pedido",
  ]

  const [loading, setloading] = useState<boolean>(false)
  const [showModal, setModal] = useState<boolean>(false)

  const [option, setOption] = useState<OPTIONS>(1)
  
  
  const [bulletinNumber, setBulletinNumber] = useState<number | "">("")
  const [dates, setDates] = useState({
    dateFrom: formatDateString(subWeeks(TODAY, 1)),
    dateTo: formatDateString(),
  })
  
  const [bulletins, setBulletins] = useState<Bulletin[]>([])
  const [bulletinDetails, setBulletinDetails] = useState<BulletinHeader[]>([])
  
  const { dateFrom, dateTo } = dates

  useEffect(() => {
    searchBulletins(dates)
  }, [])

  const NotificationProps = useNotification()
  const { handleNotification } = NotificationProps

  const searchBulletins = async (body: BulletinsProps) => {
    setloading(true)
    handleNotification.close()
    try {

      const data = await getBulletins(body)
      setBulletins(data)

    } catch (error) {

      console.log('error', error)
      handleNotification.open({
        type: "danger",
        title: "Error ❌",
        message: "Ha habido un error intentado traer los boletines, intente de nuevo",
      })

    } finally {
      setloading(false)
    }
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target
    debugger
    if (name === "search-order") {
      const number = parseInt(value)
      setBulletinNumber(value !== "" ? number : "")
    } else {
      setDates({
        ...dates, [name]: value
      })
    }
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    if (option === DATE) {
      await searchBulletins(dates)
    }
    if (option === BOLETIN_NUMBER && bulletinNumber) {
      await searchBulletins({ bulletinNumber })
    }
  }

  const getDetails = async (bulletinNumber: number) => {
    try {
      setModal(true)
      setBulletinDetails([])
      
      const data = await getBulletinInfo(bulletinNumber)
      setBulletinDetails(data)
      
      console.log('data', data)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className="SelectEmployees Layout MyOrders">
      <Header />
      <main className="pt-10 xl:px-60">

        <div className="pb-8">
          <h1 className="MyOrders__title">Mis Ordenes</h1>
          <Switch
            id="search2"
            label="Fecha / N° Boletín"
            onChange={({ target }) => {
              setOption(target.checked ? BOLETIN_NUMBER : DATE)
            }}
          />
        </div>

        <section>
          <form onSubmit={handleSubmit} className="MyOrders__options pb-10">
            {
              option === DATE &&
              <>
                <Input id="dateFrom" onChange={handleChange} value={dateFrom} title="Desde" type="date" />
                <Input id="dateTo" onChange={handleChange} value={dateTo} title="Hasta" type="date" />
              </>
            }

            {
              option === BOLETIN_NUMBER &&
              <>
                <Input
                  id="search-order"
                  title="Buscar"
                  value={bulletinNumber}
                  type="number"
                  placeholder="📄 Número de Boletín"
                  className="col-start-1 col-end-3"
                  onChange={handleChange}
                />
              </>
            }

            <Button type="submit" color="secondary">
              Buscar
            </Button>
          </form>
          {
            loading ?
              <div className="py-20">
                <Spinner size="normal" />
              </div>
              :
              <div className="overflow-x-scroll md:overflow-x-auto">
                <table className="Table" style={{ minWidth: "860px" }}>
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
                    </tr>
                  </thead>
                  <tbody>
                    {
                      bulletins.map((bulletin, i) =>
                        <tr key={i}>
                          <td className=" font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {bulletin.number}
                          </td>
                          <td className="font-bold">
                            {bulletin.zone}
                          </td>
                          <td className="">
                            {bulletin.ficha}
                          </td>
                          <td className="">
                            {bulletin.name}
                          </td>
                          <td className="">
                            {shortDate(bulletin.date)}
                          </td>
                          <td className="">
                            {/* {bulletin.cajas} */}
                          </td>
                          <td className="">
                            {/* {bulletin.total_pedido} */}
                          </td>
                          <td className="grid grid-cols-2 gap-4">
                            <button type="button">
                              🛒
                            </button>
                            <button type="button" onClick={() => getDetails(bulletin.number)}>
                              📋
                            </button>
                          </td>
                        </tr>
                      )
                    }
                    {/*Bill Footer */}
                    {/* <tr>
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
                <td className=" font-bold text-secondary">
                  {bill}
                </td>
                <td className="atext-right"></td>
                <td className="w-4 p-4"></td>
              </tr> */}
                  </tbody>
                </table>
              </div>
          }
        </section>
      </main>

      <NotificationModal {...NotificationProps} />
      <BulletinDetailsModal {...{setModal, showModal, bulletinDetails}}/>
      
    </div>
  )
}

export default MyOrders