import React, { ChangeEventHandler } from 'react'
const XLSX = require('../../../../node_modules/xlsx/xlsx.js')

const xlsxFileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

type EmployeeXLSX = {
  Fichas: number,
}

const DropFiles = () => {

  // console.log({ element: event.target });
  // console.log(event.target.files);


  // const getEmployeeIDs = () => {
  //   const name = "Fichas";
  //   const employees: EmployeeXLSX[] = XLSX.utils.sheet_to_json(workbook.Sheets[name])
  // }

  const HandleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { files } = event.target

    if (files?.length) {
      const [file] = Array.from(files) // file.xlsx

      const reader = new FileReader()
      reader.readAsArrayBuffer(file)

      reader.addEventListener("load", (event) => {
        event.preventDefault()
        
        // Se lee el archivo
        const arrayBuffer = reader.result // File.xlsx
        const workbook = XLSX.readFile(arrayBuffer)

        // Se pasa el contenido del archivo a JSON
        const name = "Fichas";
        const employees: EmployeeXLSX[] = XLSX.utils.sheet_to_json(workbook.Sheets[name])

        // Se almacenan las fichas de los trabajadores en un array
        const employeeIDs = employees.map(employee => employee.Fichas)

        console.log('JSON', employeeIDs)
      })
    }
  }

  // console.log('XLSX', XLSX)

  // const blob = new Blob([files[0]], { type: xlsxFileType })
  // console.log('blob', blob)

  // const domString = URL.createObjectURL(blob)
  // console.log('domString', domString)

  return (
    <div>
      <h4>Archivos</h4>
      <input type="file" onChange={HandleChange} />
    </div>
  )
}

export default DropFiles