export const parseDecimals = (price: number): number =>{
  const parsed = parseFloat((price).toFixed(4))
  return parsed;
}

const formatMoney = (price: number): string => {
  return (
    `${parseDecimals(price)} VES`
  )
  // return (
  //   price.toLocaleString("es", {
  //     style: "currency",
  //     currency: "VES"
  //   })
  // )
}

export default formatMoney;