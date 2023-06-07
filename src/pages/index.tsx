import React, { useContext } from 'react'
import { NextPage } from 'next'
import Link from 'next/link';
import Header from "@/components/widgets/Header";
import getProducts from "@/utils/getProducts";
import ProductItem from "@/components/pages/ProductItem";
import Aside from '@/components/pages/Aside';
import CartContext from '@/context/CartContext';

const Home: NextPage = () => {

  const { cart } = useContext(CartContext)
  
  const options = [{ name: "", value: "" }]
  const products = getProducts()

  return (
    <div className="px-4 md:px-24 pb-20">
      <Header />
      <main className="Home">
        <p className="pb-8">Se ha encontrado 1 item(s) por el SKU: 15297</p>
        <div className="main_container">

          <Aside />

          <section>
            {
              products.map(product =>
                <ProductItem key={product.sku} product={product} />
              )
            }
          </section>

        </div>
      </main>
      <footer></footer>
    </div>
  )
}

export default Home