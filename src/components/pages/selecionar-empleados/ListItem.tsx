import React, { Dispatch, MouseEventHandler, SetStateAction } from 'react'

type Props = {
  employee: Employee,
  selectedList?: boolean,
  selectedEmployees: Employee[],
  setSelectedEmployees: Dispatch<SetStateAction<Employee[]>>
}

const ListItem = ({ employee, selectedList, selectedEmployees, setSelectedEmployees }: Props) => {

  const found = selectedEmployees.find(item => item.ficha === employee.ficha)

  const handleSelect: MouseEventHandler<HTMLDivElement> = ({ target }) => {
    if (!selectedList) {
      !found
        ? setSelectedEmployees([...selectedEmployees, employee])
        : handleDelete()
    }
  }

  const handleDelete = () => {
    setSelectedEmployees(selectedEmployees.filter(item => item.ficha !== employee.ficha))
  }

  const { ficha, name } = employee
  return (
    <div className={`list-item ${(selectedList) ? "selected" : ""}`} onClick={handleSelect}>
      <p>{ficha} {name}</p>
      {
        selectedList &&
        <button onClick={handleDelete} className="py-1 px-3 text-xs rounded-lg bg-gray-600 hover:bg-red-400">
          X
        </button>
      }
      {
        found && !selectedList &&
        <span>✅</span>
      }
    </div>
  )
}

export default ListItem;