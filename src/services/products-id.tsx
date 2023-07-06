import axios from "axios"

export const getProducts = async () => {
  const { data } = await axios.post<Product[]>("/api/products")
  console.log('data', data)
  return data;
}