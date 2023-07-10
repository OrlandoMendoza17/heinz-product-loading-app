import React, { ChangeEventHandler, FormEventHandler, MouseEventHandler, useContext, useEffect, useState } from 'react'
import Employees from '@/components/pages/selecionar-empleados/Employees'
import Header from '@/components/widgets/Header/Header'
import Input from '@/components/widgets/Input'
import Select from '@/components/widgets/Select'
import { filterByNumbers, getJsonFromExcel } from '@/utils'
import getEmployees from '@/utils/getEmployees'
import Textarea from '@/components/widgets/Textarea'
import Button from '@/components/widgets/Button'
import { useRouter } from 'next/router'
import Form from '@/components/widgets/Form'
import NotificationModal from '@/components/widgets/NotificationModal'
import useNotification from '@/hooks/useNotification'
import CartContext from '@/context/CartContext'
import DropZone from '@/components/pages/activar-ficha/DropZone'
import { FaArrowRight } from 'react-icons/fa6'

type HandleFormProps = {
	submit: FormEventHandler<HTMLFormElement>,
	invalid: () => void,
}

const filesAllowed = [
	{
		label: ".xlsx",
		type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	}
]

const SelectEmployees = () => {

	const router = useRouter()
	const context = useContext(CartContext)

	const { cart, purchase, setPurchase } = context
	const { selectedEmployees, setSelectedEmployees } = context

	const [loading, setLoading] = useState<boolean>(false)

	const [employees, setEmployees] = useState<Employee[]>([])
	const [searching, setSearching] = useState<boolean>(false)
	const [searchedEmployees, setSearchedEmployees] = useState<Employee[]>([])
	// const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([])

	const [search, setSearch] = useState<number | "">("")

	const { notification, handleNotification } = useNotification()

	useEffect(() => {
		const employees = getEmployees()
		setEmployees(employees)
	}, [])

	const handleForm: HandleFormProps = {
		submit: (event) => {
			event.preventDefault()

			if (!selectedEmployees.length) {

				debugger
				handleForm.invalid()

			} else {

				router.push("/cart")

			}

		},
		invalid: () => {
			handleNotification.open({
				type: "danger",
				title: "Faltan campos",
				message: "Debes llenar los campos resaltados y seleccionar al menos 1 empleado para poder avanzar",
			})
		}
	}

	const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({ target }) => {

		const { name, value } = target

		if (name === "ficha-search") {

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

		} else {
			setPurchase({
				...purchase, [name]: value
			})
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

	const handleFiles = async (files: FileList) => {

		const [file] = Array.from(files)
		const allowedTypes = filesAllowed.map(item => item.type)

		if (allowedTypes.includes(file.type)) {
			const { rows, errors } = await getJsonFromExcel(file);
			const newList = [...selectedEmployees]

			rows.forEach(inserted => {
				const findEmployee = (employee: Employee) => {
					return employee.ficha === inserted.ficha
				}

				const exists = employees.find(findEmployee)
				const notSelected = !selectedEmployees.find(findEmployee)

				// Verifica si la ficha existe en la base de datos y si ya fue seleccionada
				if (exists && notSelected) newList.push({
					...inserted,
					name: exists.name,
				})
			})

			console.log('info', rows)
			console.log('errors', errors)
			console.log('newList', newList)
			setSelectedEmployees(newList)
		}
	}

	const employeeListTitle = (
		<>Lista de empleados <small>({searching ? searchedEmployees.length : employees.length})</small></>
	)

	const employeesProps = {
		selectedList: false,
		selectedEmployees,
		setSelectedEmployees
	}

	const selectedEmployeesProps = { ...employeesProps, selectedList: true }

	const DropZoneProps = {
		loading,
		filesAllowed,
		setLoading,
		handleFiles,
	}

	return (
		<>
			<div className="SelectEmployees Layout">
				<Header />
				<main className="pt-10 xl:px-60">

					<Form onSubmit={handleForm.submit} onInvalid={handleForm.invalid}>
						<h1 className="text-3xl font-bold">Selecionar Empleados</h1>

						{/* ficha-search | order | date */}
						<div>
							<div className="input-list">
								<Input
									id="ficha-search"
									title="Buscar por ficha"
									placeholder="💼 Employee's ID"
									value={search}
									onChange={handleChange}
									required={false}
								/>

								<Input
									id="order"
									title="Orden de Compra"
									placeholder="📄 12-12052023"
									value={purchase.order}
									onChange={handleChange}
								/>
								
								<Input
									id="date"
									title="Fecha de recepción"
									type="date"
									value={purchase.date}
									onChange={handleChange}
								/>

								{/* <Select id="order" title="Filtrar por tipo" defaultOption="-" options={[{ name: "", value: "" }]} /> */}
								{/* <Select id="date" title="Filtrar por sub-tipo" defaultOption="-" options={[{ name: "", value: "" }]} /> */}
							</div>
						</div>

						<div className="Employee-grid">
							{
								searching ?
									// Siempre aparecerá el botón de limpiar
									<Employees
										showDeleteButton={true}
										title={employeeListTitle}
										handleClean={handleClean.search}
										employees={searchedEmployees}
										{...employeesProps}
									/>
									:
									// No aparecerá el botón de limpiar
									<Employees
										title={employeeListTitle}
										employees={employees}
										{...employeesProps}
									/>
							}

							<Employees
								// Botón de limpiar aparecerá cuando hayan items en la lista
								title={<>Seleccionados <small>({selectedEmployees.length})</small></>}
								handleClean={handleClean.selected}
								showDeleteButton={Boolean(selectedEmployees.length)}
								employees={selectedEmployees}
								{...selectedEmployeesProps}
							/>

						</div>

						<DropZone {...DropZoneProps}>
							Cargar Empleados
						</DropZone>

						<Textarea
							id="details"
							value={purchase.details}
							title="Observaciones"
							className="pt-14"
							onChange={handleChange}
							placeholder="📝 ..."
							required={false}
						/>

						<div className="flex justify-end pt-8">
							<Button
								color="info"
								type="submit"
								className="font-bold !px-10 flex gap-4 items-center"
							>
								Siguiente <FaArrowRight className="mt-1" size={14} />
							</Button>
						</div>
					</Form>

				</main>
				<footer></footer>
			</div>

			<NotificationModal
				{...notification}
				closeNotification={handleNotification.close}
			/>

		</>
	)
}

export default SelectEmployees