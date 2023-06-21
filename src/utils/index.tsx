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
    "Fichas": "fichas",
  }

  type jsonProps = {
    fichas: number
  }

  const output = await readXlsxFile<jsonProps>(file, { map })
  return output;
}

export const stringListFrom = (array: string[]): string => {
  const formatter = new Intl.ListFormat('es', { style: 'long', type: 'conjunction' });
  return formatter.format(array)
}