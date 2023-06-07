const formatMoney = (price: number): string => {
  return (
    price.toLocaleString("es", {
      style: "currency",
      currency: "VES"
    })
  )
}

export default formatMoney;