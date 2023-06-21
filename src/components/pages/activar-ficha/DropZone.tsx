import { getJsonFromExcel } from '@/utils'
import React, { ChangeEventHandler, DragEventHandler, MouseEventHandler } from 'react'
import readXlsxFile from 'read-excel-file'

const xlsxFileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

type EmployeeXLSX = {
  Fichas: number,
}

const DropZone = () => {

  // console.log({ element: event.target });
  // console.log(event.target.files);


  // const getEmployeeIDs = () => {
  //   const name = "Fichas";
  //   const employees: EmployeeXLSX[] = XLSX.utils.sheet_to_json(workbook.Sheets[name])
  // }

  // const HandleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   const { files } = event.target

  //   if (files?.length) {
  //     const [file] = Array.from(files) // file.xlsx

  //     const reader = new FileReader()
  //     reader.readAsArrayBuffer(file)

  //     reader.addEventListener("load", (event) => {
  //       event.preventDefault()

  //       // Se lee el archivo
  //       const arrayBuffer = reader.result // File.xlsx
  //       const workbook = XLSX.readFile(arrayBuffer)

  //       // Se pasa el contenido del archivo a JSON
  //       const name = "Fichas";
  //       const employees: EmployeeXLSX[] = XLSX.utils.sheet_to_json(workbook.Sheets[name])

  //       // Se almacenan las fichas de los trabajadores en un array
  //       const employeeIDs = employees.map(employee => employee.Fichas)

  //       console.log('JSON', employeeIDs)
  //     })
  //   }
  // }



  const HandleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    const { files } = event.target

    if (files?.length) {
      const [file] = Array.from(files) // file.xlsx
      try {
        const fichas = await getJsonFromExcel(file)
        console.log('fichas', fichas)
      } catch (error) {
        console.log(error)
      }
    }
  }

  // console.log('XLSX', XLSX)

  // const blob = new Blob([files[0]], { type: xlsxFileType })
  // console.log('blob', blob)

  // const domString = URL.createObjectURL(blob)
  // console.log('domString', domString)

  const handleDragEnter: DragEventHandler<HTMLDivElement> = ({ currentTarget }) => {
    currentTarget.classList.add("draggingOver")
    console.log("drag entered");
  }
  const handleDragLeave: DragEventHandler<HTMLDivElement> = ({ currentTarget }) => {
    currentTarget.classList.remove("draggingOver")
    console.log("drag left");
  }
  const handleDrop: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault()
    event.currentTarget.classList.remove("draggingOver")
    console.log("drop");
    console.log("files", event.dataTransfer.files);
    debugger
  }

  return (
    <div>
      <h4>Archivos</h4>
      <input type="file" onChange={HandleChange} />
      <div
        className="DropZone"
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={(event) => event.preventDefault()}
      // onDropCapture={}
      ></div>
    </div>
  )
}

export default DropZone