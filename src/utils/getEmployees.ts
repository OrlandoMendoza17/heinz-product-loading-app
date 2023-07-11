const getEmployees = (): Employee[] => {
  const employees: Employee[] = [
    {
      ficha: 1004529,
      name: "Neme Anka, Elias Jose",
    },
    {
      ficha: 1014474,
      name: "Vargas Bolívar, Mary Carmen",
    },
    {
      ficha: 1000703,
      name: "Pinto Nieves, Carmen Pialina",
    },
    {
      ficha: 1012196,
      name: "Lucena Medina, Mary Carmen",
    },
    {
      ficha: 1014642,
      name: "Mendez Alvarez, Juan Carlos",
    },
    {
      ficha: 1014419,
      name: "Pages Contreras, Jose Gregorio",
    },
    {
      ficha: 27313279,
      name: "Mendoza Vargas, Orlando Manuel",
    },

  ]
  return employees;
}

export default getEmployees;