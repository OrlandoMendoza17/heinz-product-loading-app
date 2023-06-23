type Product = {
  name: string, // IMDSC1 | STOCKCOD
  sku: number,  // IMLITM
  available: number, // STOCKCANT
  
  image: string, // Se va a eliminar porque obtendrá en una carpeta local dependiendo del sku del producto
  quantity: number, // Se setea desde la app
  price: number, // ?
}

type Employee = {
  ficha: number;
  name: string;
}