const getProducts = () => {

  // const randomSKU = () => parseInt((Math.random() * 30000).toString()).toString()
  const randomPrice = () => parseInt((Math.random() * 100000).toString())

  const products = [
    {
      name: "Salsa Tomate Ketchup",
      sku: 1,
      price: randomPrice(),
      quantity: 10,
      image: "https://i.imgur.com/s6tvKnQ.png",
    },
    {
      name: "Salsa Mostasa",
      sku: 2,
      price: randomPrice(),
      quantity: 10,
      image: "https://www.kraftheinzcompany.com/pressroom/images/view/mustard_product_large.jpg",
    },
    {
      name: "Salsa Mayonesa",
      sku: 3,
      price: randomPrice(),
      quantity: 10,
      image: "https://i.imgur.com/XaQPtPi.jpg",
    },
    {
      name: "Salsa 57",
      sku: 4,
      price: randomPrice(),
      quantity: 10,
      image: "https://i.imgur.com/qHceICI.jpg",
    },
    {
      name: "Salsa BBK",
      sku: 5,
      price: randomPrice(),
      quantity: 10,
      image: "https://i.imgur.com/P095CTq.jpg",
    },
    {
      name: "Salsa Picante",
      sku: 6,
      price: randomPrice(),
      quantity: 10,
      image: "https://i.imgur.com/3ylLOfh.jpg",
    },
    {
      name: "Salsa de Soya",
      sku: 7,
      price: randomPrice(),
      quantity: 10,
      image: "https://i.imgur.com/2REcYOi.jpg",
    },
    {
      name: "Salsa de Ajo",
      sku: 8,
      price: randomPrice(),
      quantity: 10,
      image: "https://i.imgur.com/HJOr8mX.jpg",
    },
    {
      name: "Colado de Postre de Frutas",
      sku: 9,
      price: randomPrice(),
      quantity: 10,
      image: "https://cdn.shopify.com/s/files/1/0419/5083/8949/products/Untitled-2-10.jpg",
    },
  ]
  
  return products;
}

export default getProducts;