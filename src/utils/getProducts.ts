const getProducts = () => {

  // const randomSKU = () => parseInt((Math.random() * 30000).toString()).toString()
  // const randomPrice = () => parseInt((Math.random() * 100000).toString())

  const products = [
    {
      name: 'Salsa Tomato Ketchup',
      sku: 15196,
      price: 68,
      quantity: 0,
      available: 10,
      image: 'https://i.imgur.com/ngedpd4.png'
    },
    {
      name: 'Salsa Mostasa',
      sku: 15260,
      price: 16,
      quantity: 0,
      available: 10,
      image: 'https://i.imgur.com/L8lOqCA.png'
    },
    {
      name: 'Salsa Tomato Ketchup Picante',
      sku: 15553,
      price: 76,
      quantity: 0,
      available: 10,
      image: 'https://i.imgur.com/cQ6WozY.png'
    },
    {
      name: 'Salsa 57',
      sku: 15266,
      price: 46,
      quantity: 0,
      available: 10,
      image: 'https://i.imgur.com/2fijKlZ.png'
    },
    {
      name: 'Salsa BBK',
      sku: 15707,
      price: 14,
      quantity: 0,
      available: 10,
      image: 'https://i.imgur.com/6FXSZ3l.png'
    },
    {
      name: 'Salsa Picante',
      sku: 15288,
      price: 60,
      quantity: 0,
      available: 10,
      image: 'https://i.imgur.com/sfml8nl.png'
    },
    {
      name: 'Salsa de Soya',
      sku: 15272,
      price: 24,
      quantity: 0,
      available: 10,
      image: 'https://i.imgur.com/qMCO7aB.png'
    },
    {
      name: 'Salsa de Ajo',
      sku: 15295,
      price: 11,
      quantity: 0,
      available: 10,
      image: 'https://i.imgur.com/OeFz1vP.png'
    },
    {
      name: 'Colado de Postre de Frutas',
      sku: 15759,
      price: 57,
      quantity: 0,
      available: 10,
      image: 'https://i.imgur.com/Yl57Hlk.png'
    }
  ]
  
  return products;
}

export default getProducts;