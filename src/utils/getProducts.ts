const getProducts = () => {

  // const randomSKU = () => parseInt((Math.random() * 30000).toString()).toString()
  // const randomPrice = () => parseInt((Math.random() * 100000).toString())

  const products = [
    {
      name: 'Salsa Tomate Ketchup',
      sku: 1,
      price: 68,
      quantity: 0,
      available: 10,
      discount: 0.1,
      image: 'https://i.imgur.com/s6tvKnQ.png'
    },
    {
      name: 'Salsa Mostasa',
      sku: 2,
      price: 16,
      quantity: 0,
      available: 10,
      discount: 0.1,
      image: 'https://www.kraftheinzcompany.com/pressroom/images/view/mustard_product_large.jpg'
    },
    {
      name: 'Salsa Mayonesa',
      sku: 3,
      price: 76,
      quantity: 0,
      available: 10,
      discount: 0.1,
      image: 'https://i.imgur.com/XaQPtPi.jpg'
    },
    {
      name: 'Salsa 57',
      sku: 4,
      price: 46,
      quantity: 0,
      available: 10,
      discount: 0.1,
      image: 'https://i.imgur.com/qHceICI.jpg'
    },
    {
      name: 'Salsa BBK',
      sku: 5,
      price: 14,
      quantity: 0,
      available: 10,
      discount: 0.1,
      image: 'https://i.imgur.com/P095CTq.jpg'
    },
    {
      name: 'Salsa Picante',
      sku: 6,
      price: 60,
      quantity: 0,
      available: 10,
      discount: 0.1,
      image: 'https://i.imgur.com/3ylLOfh.jpg'
    },
    {
      name: 'Salsa de Soya',
      sku: 7,
      price: 24,
      quantity: 0,
      available: 10,
      discount: 0.1,
      image: 'https://i.imgur.com/2REcYOi.jpg'
    },
    {
      name: 'Salsa de Ajo',
      sku: 8,
      price: 11,
      quantity: 0,
      available: 10,
      discount: 0.1,
      image: 'https://i.imgur.com/HJOr8mX.jpg'
    },
    {
      name: 'Colado de Postre de Frutas',
      sku: 9,
      price: 57,
      quantity: 0,
      available: 10,
      discount: 0.1,
      image: 'https://cdn.shopify.com/s/files/1/0419/5083/8949/products/Untitled-2-10.jpg'
    }
  ]
  
  return products;
}

export default getProducts;