import Product from "@/components/Product";
import Header from "@/components/widgets/Header";
import Input from "@/components/widgets/Input";
import Select from "@/components/widgets/Select";
import getProducts from "@/utils/getProducts";
import Link from "next/link";
// import getProducts from "../utils/getProducts";

// const getMovies = async () => {
//   // const response = await fetch("https://api.jikan.moe/v4/anime")
//   const response = await fetch("https://api.jikan.moe/v4/anime", { cache: "no-store" })
//   const { data }: { data: Movie[] } = await response.json()
//   return data;
// }

const Home = async () => {

  const options = [{ name: "", value: "" }]

  const products = getProducts()
  
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
                <Product key={product.sku} {...product} />
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
