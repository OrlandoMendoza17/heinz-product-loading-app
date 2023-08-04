import { createContext, Dispatch, SetStateAction } from "react";

type Bills = {
  bills: Bill[];
  setBills: Dispatch<SetStateAction<Bill[]>>;
  findBill: (ficha: number) => Bill | undefined;
  deleteBill: (ficha: number) => void;
  updateProduct: (modified: Product, ficha: number) => void;
  updatePurchase: (purchase: Purchase, ficha: Employee["ficha"]) => void;
  deleteProduct: (productID: Product["sku"], ficha: number) => void;
}

const BillsContext = createContext<Bills>({} as Bills)

export default BillsContext;