export const isString = (string: unknown): boolean => {
  return typeof string === "string"
}

export const filterByNumbers = (value: string): number => { //"this27is65a34string" => 276534
  const array = value.split("")
  const onlyNumbersString = array.filter(char => !isNaN(parseInt(char))).join("")
  return parseInt(onlyNumbersString)
}
