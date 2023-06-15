import Employees from '@/components/pages/selecionar-empleados/Employees'
import ListItem from '@/components/pages/selecionar-empleados/ListItem'
import Header from '@/components/widgets/Header'
import Input from '@/components/widgets/Input'
import Select from '@/components/widgets/Select'
import { filterByNumbers } from '@/utils'
import getEmployees from '@/utils/getEmployees'
import React, { ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react'

const SelectEmployees = () => {

	const [employees, setEmployees] = useState<Employee[]>([])
	const [searching, setSearching] = useState<boolean>(false)
	const [searchedEmployees, setSearchedEmployees] = useState<Employee[]>([])
	const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([])

	const [search, setSearch] = useState<number | "">("")

	useEffect(() => {
		const employees = getEmployees()
		setEmployees(employees)
	}, [])

	const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		const value = filterByNumbers(target.value)
		if (target.value === "") {

			setSearch("")
			setSearching(false)

		} else if (!isNaN(value)) {
			setSearch(value)
			setSearching(true)

			setSearchedEmployees(
				employees.filter(employee =>
					employee.ficha.toString().includes(value.toString())
				)
			)
		}
	}

	const handleClean = {
		search: () => {
			setSearch("")
			setSearching(false)
			setSearchedEmployees([])
			console.log("hola");
		},
		selected: () => {
			setSelectedEmployees([])
		}
	}

	const employeeListTitle =
		<>Lista de empleados <small>({searching ? searchedEmployees.length : employees.length})</small></>

	const employeesProps = {
		selectedList: false,
		selectedEmployees,
		setSelectedEmployees
	}

	const selectedEmployeesProps = { ...employeesProps, selectedList: true }

	return (
		<div className="SelectEmployees px-4 md:px-24 pb-20">
			<Header />
			<main className="pt-10 xl:px-60">
				<h1 className="text-3xl font-bold">Selecionar Empleados</h1>
				<div>
					<div className="input-list">
						<Input id="ficha-search" title="Buscar por ficha" placeholder="💼 Employee SKU" value={search} onChange={handleChange} />
						<Input id="purchase-order" title="Orden de Compra" placeholder="📄 12-12052023" />
						<Input id="purchase-date" title="Fecha de recepción" type="date" />

						{/* <Select id="purchase-order" title="Filtrar por tipo" defaultOption="-" options={[{ name: "", value: "" }]} /> */}
						{/* <Select id="purchase-date" title="Filtrar por sub-tipo" defaultOption="-" options={[{ name: "", value: "" }]} /> */}

					</div>
				</div>

				<div className="List-grid">
					{
						searching ?
							<Employees
								title={employeeListTitle}
								handleClean={handleClean.search}
								employees={searchedEmployees}
								{...employeesProps}
							/>
							:
							<Employees
								title={employeeListTitle}
								employees={employees}
								{...employeesProps}
							/>
					}

					<Employees
						title={<>Seleccionados <small>({selectedEmployees.length})</small></>}
						handleClean={handleClean.selected}
						employees={selectedEmployees}
						{...selectedEmployeesProps}
					/>

				</div>

			</main>
			<footer></footer>
		</div>
	)
}

export default SelectEmployees