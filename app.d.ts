type Product = {
  name: string, // IMDSC1 | STOCKCOD
  sku: number,  // IMLITM
  available: number, // STOCKCANT
  price: number, // ?

  image: string, // Se va a eliminar porque obtendrá en una carpeta local dependiendo del sku del producto
  quantity: number, // Se setea desde la app
}

type Employee = {
  ficha: number;
  name: string;
}

type Purchase = {
  order: string;
  date: string;
  details: string;
}