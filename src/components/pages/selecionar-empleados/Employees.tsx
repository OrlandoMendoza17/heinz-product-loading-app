import React, { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from 'react'
import ListItem from './ListItem'
import Button from '@/components/widgets/Button'

type Props = {
  employees: Employee[],
  selectedList: boolean,
  title: ReactNode,
  handleClean?: () => void,
  selectedEmployees: Employee[],
  setSelectedEmployees: Dispatch<SetStateAction<Employee[]>>
}

const Employees = ({ employees, title, handleClean, ...employeesProps }: Props) => {

  // condition = condition ?? Boolean(products.length)

  return (
    <div className="List">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          {title}
        </h2>
        {
          Boolean(handleClean) && Boolean(employees.length) &&
          <Button color="gray" className="!py-2" onClick={handleClean}>Limpiar</Button>
        }
      </div>
      <div className="main_container">
        {
          employees.map((employee, index) =>
            <ListItem key={index} employee={employee} {...employeesProps} />
          )
        }
      </div>
    </div>
  )
}

export default Employees