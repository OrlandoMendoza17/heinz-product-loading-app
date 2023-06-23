import React, { useState } from 'react'
import DropZone from '@/components/pages/activar-ficha/DropZone'
import Header from '@/components/widgets/Header'
import { getJsonFromExcel } from '@/utils'
import useNotification from '@/hooks/useNotification'
import NotificationModal from '@/components/widgets/NotificationModal'
import Button from '@/components/widgets/Button'

const filesAllowed = [
  {
    label: ".xlsx",
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  {
    label: ".png",
    type: "image/*",
  },
]


const ActivateEmployeesID = () => {

  const [inputFile, setInputFile] = useState<File>()
  const [employeeIDs, setEmployeeIDs] = useState<string[]>([])

  const [loading, setLoading] = useState<boolean>(false)

  const { notification, handleNotification } = useNotification()

  const handleFiles = async (files: FileList) => {

    // Only the first archive will be accepted and/or validated
    const [file] = Array.from(files) // file.xlsx
    const allowedTypes = filesAllowed.map(item => item.type)

    if (allowedTypes.includes(file.type)) {
      setInputFile(file)
      try {

        const { rows, errors } = await getJsonFromExcel(file)

        console.log('info', rows)
        console.log('errors', errors)

        // Si rows viene vacío es porque no pasaron el archivo excel con el formato adecuado
        if (rows.length) {

          handleNotification.open({
            type: "success",
            title: "Archivo Procesado",
            message: `El archivo se ha procesado correcta 👍`
          })

          // Se guardan las fichas en el estado
          setEmployeeIDs(rows.map(employee => employee.ficha.toString()))

        } else {
          handleNotification.open({
            type: "danger",
            title: "Archivo Incompatible",
            message: `El archivo ".xlsx" proporcionado no sigue el adecuado formato de entrada`
          })
          setEmployeeIDs([])
        }

      } catch (error) {
        console.log(error)
      }
    }
  }

  console.log('employeeIDs', employeeIDs)

  return (
    <>
      <div className="SelectEmployees px-4 md:px-24 pb-20">
        <Header />
        <main className="pt-10 xl:px-80">
          <section className="">

            <label htmlFor="" className="Input pb-8">
              <h1 className="pb-4 text-xl sm:text-2xl font-semibold">Activar Ficha indivual</h1>
              <div className="grid" style={{ gridTemplateColumns: "1fr auto" }}>
                <input type="text" />
                <button className="bg-secondary p-5 rounded-r-xl hover:bg-blue-800 transition-all  items-center">
                  {/* <img width={20} src="https://cdn-icons-png.flaticon.com/512/1/1228.png" alt="" /> */}
                  <span className="text-white font-bold text-base sm:text-lg">Activar</span>
                </button>
              </div>
            </label>

            <DropZone
              loading={loading}
              filesAllowed={filesAllowed}
              handleFiles={handleFiles}
              setLoading={setLoading}
            >
							Activación de fichas <small>(carga masiva)</small>
            </DropZone>

            {
              Boolean(employeeIDs.length) && !loading &&
              <div className="flex justify-end pt-8 font-bold">
                <Button color="info">
                  Activar Empleados
                </Button>
              </div>
            }

          </section>
        </main>
      </div>

      <NotificationModal
        {...notification}
        closeNotification={handleNotification.close}
      />
    </>
  )
}

export default ActivateEmployeesID