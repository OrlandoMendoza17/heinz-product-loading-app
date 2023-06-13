import React, { MouseEventHandler, useContext, useEffect } from 'react'
import { NextPage } from 'next'
import Header from "@/components/widgets/Header";
import getProducts from "@/utils/getProducts";
import ProductItem from "@/components/pages/ProductItem";
import Aside from '@/components/pages/Aside';
import CartContext from '@/context/CartContext';
import NotificationModal from '@/components/widgets/NotificationModal';
import Portal from '@/components/widgets/Portal';
import useNotification from '@/hooks/useNotification';
import ConfirmModal from '@/components/widgets/ConfirmModal';
import { useRouter } from 'next/router';
import { log } from 'console';

const { isArray } = Array

const Home: NextPage = () => {

  const { cart } = useContext(CartContext)

  const options = [{ name: "", value: "" }]
  const products = getProducts()

  const router = useRouter()
  console.log('router', router)

  useEffect(() => {
    const { search } = router.query //search: number | string

    const searchProducts = (search: string) => {
      const sku = parseInt(search) //parseInt("2734string") => 2734

      if (isFinite(sku)) {
        console.log("Valid Number");
      } else {
        console.log("Not valid Number");
      }
    }

    //Verificando si es un número válido y/o un string vacío
    if (isArray(search)) {
      searchProducts(search[0])
    } else if (search) {
      searchProducts(search)
    }

  }, [router.query])


  const { notification, handleNotification } = useNotification()

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

          <NotificationModal
            {...notification}
            closeNotification={handleNotification.close}
          />

        </div>
      </main>
      <footer></footer>
    </div>
  )
}

export default Home