import Product from "@/components/Product";
import Header from "@/components/widgets/Header";
import Input from "@/components/widgets/Input";
import Select from "@/components/widgets/Select";
import Link from "next/link";

// const getMovies = async () => {
//   // const response = await fetch("https://api.jikan.moe/v4/anime")
//   const response = await fetch("https://api.jikan.moe/v4/anime", { cache: "no-store" })
//   const { data }: { data: Movie[] } = await response.json()
//   return data;
// }

const Home = async () => {

  const options = [{ name: "", value: "" }]
  // const movies = await getMovies()

  const randomSKU = () => parseInt((Math.random() * 30000).toString()).toString()
  const randomPrice = () => parseInt((Math.random() * 100000).toString())

  const products = [
    {
      name: "Salsa Tomate Ketchup",
      sku: randomSKU(),
      price: randomPrice(),
      quantity: 10,
      image: "https://i.imgur.com/s6tvKnQ.png",
    },
    {
      name: "Salsa Mostasa",
      sku: randomSKU(),
      price: randomPrice(),
      quantity: 10,
      image: "https://www.kraftheinzcompany.com/pressroom/images/view/mustard_product_large.jpg",
    },
    {
      name: "Salsa Mayonesa",
      sku: randomSKU(),
      price: randomPrice(),
      quantity: 10,
      image: "https://i.imgur.com/XaQPtPi.jpg",
    },
    {
      name: "Salsa 57",
      sku: randomSKU(),
      price: randomPrice(),
      quantity: 10,
      image: "https://i.imgur.com/qHceICI.jpg",
    },
    {
      name: "Salsa BBK",
      sku: randomSKU(),
      price: randomPrice(),
      quantity: 10,
      image: "https://i.imgur.com/P095CTq.jpg",
    },
    {
      name: "Salsa Picante",
      sku: randomSKU(),
      price: randomPrice(),
      quantity: 10,
      image: "https://i.imgur.com/3ylLOfh.jpg",
    },
    {
      name: "Salsa de Soya",
      sku: randomSKU(),
      price: randomPrice(),
      quantity: 10,
      image: "https://i.imgur.com/2REcYOi.jpg",
    },
    {
      name: "Salsa de Ajo",
      sku: randomSKU(),
      price: randomPrice(),
      quantity: 10,
      image: "https://i.imgur.com/HJOr8mX.jpg",
    },
    {
      name: "Colado de Postre de Frutas",
      sku: randomSKU(),
      price: randomPrice(),
      quantity: 10,
      image: "https://cdn.shopify.com/s/files/1/0419/5083/8949/products/Untitled-2-10.jpg",
    },
  ]

  return (
    <div className="px-4 md:px-24 pb-20">
      <Header />
      <main className="Home">
        <p className="pb-8">Se ha encontrado 1 item(s) por el SKU: 15297</p>
        <div className="main_container">
          <aside>
            <section>
              <h2>Comprar Colados</h2>
              <ul>
                <li>
                  <Link href="/">Colados Kidz</Link>
                </li>
                <li>
                  <Link href="/">Colados 100%</Link>
                </li>
              </ul>
            </section>
            <hr />
            <section>
              <h2>Ud. Seleccionó</h2>
              <ul>
                <li>
                  <Link href="/">Marca Heinz</Link>
                </li>
              </ul>
            </section>
            <hr />
            <section>
              <h2>Filtre Resultados por:</h2>
              <ul>
                <li>
                  <Link href="/">Bs 0 - Bs 300</Link>
                </li>
                <li>
                  <Link href="/">Bs 400 - Bs 600</Link>
                </li>
                <li>
                  <Link href="/">Bs 700 - Bs 900</Link>
                </li>
                <li>
                  <Link href="/">Bs 1000</Link>
                </li>
              </ul>
            </section>
          </aside>
          <section>
            {
              products.map(product =>
                <Product {...product} />
              )
            }
          </section>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}

export default Home;
