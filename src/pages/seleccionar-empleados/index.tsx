import ListItem from '@/components/pages/selecionar-empleados/ListItem'
import Header from '@/components/widgets/Header'
import Input from '@/components/widgets/Input'
import Select from '@/components/widgets/Select'
import React, { useState } from 'react'

const SelectEmployees = () => {

	const employees = [
		{
			ficha: 1000101,
			name: "Mendoza Vargas, Orlando Manuel",
		},
		{
			ficha: 1000102,
			name: "Mendoza Chirinos, Orlando Jesús",
		},
		{
			ficha: 1000103,
			name: "Mendoza Vargas, Sofia Victoria",
		},
		{
			ficha: 1000104,
			name: "Vargas Bolívar, Mary Carmen",
		},
		{
			ficha: 1000105,
			name: "Vargas Bolívar, Manuel Alejandro",
		},
		{
			ficha: 1000106,
			name: "Mendoza Ynojosa, Marietsy Alejandra",
		},
		{
			ficha: 1000107,
			name: "Mendoza, Orlando Jesús",
		},
		{
			ficha: 1000108,
			name: "Morales, Miles",
		},
		{
			ficha: 1000109,
			name: "Stacy, Gwen",
		},
		{
			ficha: 1000110,
			name: "Ohara, Miguel",
		},
		{
			ficha: 1000111,
			name: "Jane, Mary",
		},
		{
			ficha: 1000112,
			name: "Stacy, George",
		},
	]

	const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([])

	return (
		<div className="SelectEmployees px-4 md:px-24 pb-20">
			<Header />
			<main className="pt-10 px-80">
				<h1 className="text-3xl font-bold">Selecionar Empleados</h1>
				<div>
					<div className="grid grid-cols-3 gap-4 py-10">
						<Input id="ficha-search" title="Buscar por ficha" placeholder="-" />
						
						<Select id="purchase-order" title="Filtrar por tipo" defaultOption="-" options={[{ name: "", value: "" }]} />
						<Select id="purchase-date" title="Filtrar por sub-tipo" defaultOption="-" options={[{ name: "", value: "" }]} />
						
						<Input id="purchase-order" title="Orden de Compra" placeholder="12-12052023" />
						<Input id="purchase-date" title="Fecha de recepción" type="date"/>
					</div>
				</div>
				<div className="List-grid">
					<h2 className="text-xl font-semibold">Lista de empleados <small>({employees.length})</small></h2>
					<h2 className="text-xl font-semibold">Seleccionados <small>({selectedEmployees.length})</small></h2>
					<div className="List">
						{
							employees.map((employee, index) =>
								<ListItem
									key={index}
									employee={employee}
									selectedEmployees={selectedEmployees}
									setSelectedEmployees={setSelectedEmployees}
								/>
							)
						}
					</div>
					<div className="List">
						{
							selectedEmployees.map((employee, index) =>
								<ListItem
									key={index}
									selectedList
									employee={employee}
									selectedEmployees={selectedEmployees}
									setSelectedEmployees={setSelectedEmployees}
								/>
							)
						}
					</div>
				</div>
			</main>
			<footer></footer>
		</div>
	)
}

export default SelectEmployees