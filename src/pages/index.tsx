import React, { MouseEventHandler, useContext, useEffect, useState } from 'react'
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
import ProductSkeleton from '@/components/pages/ProductSkeleton';

const { isArray } = Array

const Home: NextPage = () => {

  const { cart } = useContext(CartContext)

  const [products, setProducts] = useState<Product[]>([])

  const [searching, setSearching] = useState<boolean>(false)
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([])

  const [loading, setLoading] = useState(true)

  const options = [{ name: "", value: "" }]

  const router = useRouter()
  console.log('router', router)

  useEffect(() => {
    const { search } = router.query //search: number | string

    const searchProducts = (search: string) => {
      const sku = parseInt(search) //parseInt("2734string") => 2734
      // setLoading(true)

      if (isFinite(sku)) {
        console.log("Valid Number");
        // setTimeout(() => {
        //   const found = products.find(product => product.sku === sku)
        //   setLoading(false)
        //   console.log('found', [found])
        // }, 1000)

      } else {
        setLoading(false)
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

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      const products = getProducts()
      setProducts(products)
      setLoading(false)
    }, 3000)
  }, [])

  const { notification, handleNotification } = useNotification()

  const skelentonProducts = new Array(12).fill(0)

  return (
    <div className="px-4 md:px-24 pb-20">
      <Header />

      <main className="Home">
        {/* <p className="pb-8">Se ha encontrado 1 item(s) por el SKU: 15297</p> */}
        <div className="main_container">

          <Aside />
          
          <section>
            {
              loading &&
              skelentonProducts.map((item, i) =>
                <ProductSkeleton key={i}/>
              )
            }
            {
              !loading && (
                <>
                  {
                    !searching ?
                      products.map(product =>
                        <ProductItem key={product.sku} product={product} />
                      )
                      :
                      searchedProducts.map(product =>
                        <ProductItem key={product.sku} product={product} />
                      )
                  }
                  {
                    (!Boolean(products.length) || (searching && !Boolean(searchedProducts.length))) &&
                    <div>No se ha encontrado ningún producto</div>
                  }
                </>
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