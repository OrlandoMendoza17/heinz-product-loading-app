import readXlsxFile from 'read-excel-file'

export const isString = (string: unknown): boolean => {
  return typeof string === "string"
}

export const filterByNumbers = (value: string): number => { //"this27is65a34string" => 276534
  const array = value.split("")
  const onlyNumbersString = array.filter(char => !isNaN(parseInt(char))).join("")
  return parseInt(onlyNumbersString)
}

export const getJsonFromExcel = async (file: File) => {
  const map = {
    "Ficha": "ficha",
    "Nombre": "name",
  }

  const output = await readXlsxFile<Employee>(file, { map })
  const { rows } = output

  // Elimina los duplicados
  const stringObjectArray: string[] = rows.map(item => JSON.stringify(item));
  const sortedArray = Array.from(new Set(stringObjectArray)).map(item => JSON.parse(item)) as Employee[]

  return {...output, rows: sortedArray};
  // return output;
}

export const stringListFrom = (array: string[]): string => {
  const formatter = new Intl.ListFormat('es', { style: 'long', type: 'conjunction' });
  return formatter.format(array)
}