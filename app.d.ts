type Product = {
  name: string, // IMDSC1 | STOCKCOD
  sku: number,  // IMLITM
  available: number, // STOCKCANT
  price: number, // ?

  image?: string, // Se va a eliminar porque obtendrá en una carpeta local dependiendo del sku del producto
  quantity: number, // Se setea desde la app
}

type Employee = {
  name: string;
  CI: string;
  ficha: number;
  zone: string;
  clientType: string;
  address: string;
  birthState: string;
  birthNeighborhood: string;
}

type Purchase = {
  order: string;
  date: string;
  details: string;
}

type Bill = {
  number: number,
  purchase: Purchase,
  employee: Employee,
  products: Product[],
}

type Bulletin = {
  number: number,
  name: string;
  user: string;
  ficha: number;
  address: string;
  zone: string;
  clientType: string;
  order: string;
  store: string;
  details: string;
  date: string;
}