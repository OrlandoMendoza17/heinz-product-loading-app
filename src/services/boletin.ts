import { BulletinsProps } from "@/pages/api/boletin";
import { BulletinHeader } from "@/pages/api/boletin/info";
import axios from "axios";

export const getBulletins = async (body: BulletinsProps) => {
  const { data } = await axios.post<Bulletin[]>("/api/boletin", body)
  return data;
}

export const getBulletinInfo = async (bulletinNumber: number) => {
  const { data } = await axios.post<BulletinHeader[]>("/api/boletin/info", { bulletinNumber })
  return data;
}