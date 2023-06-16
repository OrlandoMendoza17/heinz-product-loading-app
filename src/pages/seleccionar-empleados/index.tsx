import React, { ChangeEventHandler, FormEventHandler, MouseEventHandler, useContext, useEffect, useState } from 'react'
import Employees from '@/components/pages/selecionar-empleados/Employees'
import Header from '@/components/widgets/Header'
import Input from '@/components/widgets/Input'
import Select from '@/components/widgets/Select'
import { filterByNumbers } from '@/utils'
import getEmployees from '@/utils/getEmployees'
import Textarea from '@/components/widgets/Textarea'
import Button from '@/components/widgets/Button'
import { useRouter } from 'next/router'
import Form from '@/components/widgets/Form'
import NotificationModal from '@/components/widgets/NotificationModal'
import useNotification from '@/hooks/useNotification'
import CartContext from '@/context/CartContext'

type HandleFormProps = {
	submit: FormEventHandler<HTMLFormElement>,
	invalid: () => void,
}

const SelectEmployees = () => {

	const router = useRouter()
	const { cart } = useContext(CartContext)

	const [employees, setEmployees] = useState<Employee[]>([])
	const [searching, setSearching] = useState<boolean>(false)
	const [searchedEmployees, setSearchedEmployees] = useState<Employee[]>([])
	const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([])

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
				
			} else if (!cart.length) {
				debugger
				handleNotification.open({
					type: "danger",
					title: "Carrito Vacío",
					message: "Debes tener al menos 1 producto en el carrito para poder avanzar",
				})
				
			} else {
				
				router.push("/")
				
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
		<>
			<div className="SelectEmployees px-4 md:px-24 pb-20">
				<Header />
				<main className="pt-10 xl:px-60">

					<Form onSubmit={handleForm.submit} onInvalid={handleForm.invalid}>
						<h1 className="text-3xl font-bold">Selecionar Empleados</h1>

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

								<Input id="purchase-order" title="Orden de Compra" placeholder="📄 12-12052023" />
								<Input id="purchase-date" title="Fecha de recepción" type="date" />

								{/* <Select id="purchase-order" title="Filtrar por tipo" defaultOption="-" options={[{ name: "", value: "" }]} /> */}
								{/* <Select id="purchase-date" title="Filtrar por sub-tipo" defaultOption="-" options={[{ name: "", value: "" }]} /> */}

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

						<Textarea id="textarea" title="Observaciones" placeholder="📝 ..." required={false} />

						<div className="flex justify-end pt-8">
							<Button
								color="info"
								type="submit"
								className="font-bold !px-10"
							>
								Siguiente →
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