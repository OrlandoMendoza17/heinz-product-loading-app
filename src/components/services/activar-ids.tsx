import axios, { AxiosError } from "axios"
import { Dispatch, SetStateAction } from "react"

export const activateEmployeeIDs = async (idList: string[]) => {
  const body = { idList }
  const response = await axios.post("/api/activar-ids", body)
  console.log('response', response)
}