import React, { ChangeEventHandler, FormEventHandler, MouseEventHandler, useContext, useEffect, useRef, useState } from 'react'
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
import RenderProducts from '@/components/pages/RenderProducts';
import { filterByNumbers } from '@/utils';
import Select from '@/components/widgets/Select';
import Input from '@/components/widgets/Input';
import Button from '@/components/widgets/Button';

const { isArray } = Array

const Home: NextPage = () => {

  const { cart } = useContext(CartContext)

  const [products, setProducts] = useState<Product[]>([])

  const [searching, setSearching] = useState<boolean>(false)
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([])

  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState<number | "">("")

  const $form = useRef<HTMLFormElement>(null)


  const options = [{ name: "", value: "" }]

  const router = useRouter()

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

  const NO_PRODUCTS = !Boolean(products.length)
  const NOT_FOUND_PRODUCTS = (searching && !Boolean(searchedProducts.length))

  const DINT_FIND_PRODUCTS = (NO_PRODUCTS || NOT_FOUND_PRODUCTS)

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const value = filterByNumbers(target.value)
    if (target.value === "") {
      debugger
      setSearch(target.value)
      setSearching(false)
    } else if(!isNaN(value)){
      
      setSearch(!isNaN(value) ? value : search)
      setSearching(true)

      if (products.length) {
        try {

          const foundProducts = products.filter(product => product.sku.toString().includes(value.toString()))
          debugger
          setSearchedProducts(foundProducts)
          console.log('foundProducts', [foundProducts])

        } catch (error) {
          console.error(error)
        }
      }
    }
  }

  console.log('search', search)

  return (
    <div className="Home px-4 md:px-24 pb-20">
      <Header />

      <form ref={$form} className="search-products">
        <Select title="" defaultOption="Categorías" options={[{ name: "", value: "" }]} required={false} />
        <div className="xx_sm:flex items-center">
          <Input
            id="search"
            title=""
            value={search}
            className="w-full"
            placeholder="🔍 Product SKU"
            onChange={handleChange}
          />
          {/* <Button type="submit" color="info" className="w-full xx_sm:w-auto !px-8 !rounded-none">Buscar</Button> */}

          {
            search &&
            <Button
              color="danger"
              className="w-auto !px-8 !rounded-none"
              onClick={() => {
                setSearch("")
                setSearching(false)
              }}
            >
              X
            </Button>
          }
        </div>
        <span>Bienvenido <strong className="text-cyan-600">Orlando</strong></span>
      </form>

      {
        !loading && DINT_FIND_PRODUCTS &&
        <p className="pt-8">No se ha encontrado ningún producto por <span className="font-bold">"{search}"</span></p>
      }
      <main className="pt-8">
        {/* <p className="pb-8">Se ha encontrado 1 item(s) por el SKU: 15297</p> */}
        <div className="main_container">

          <Aside />

          <section>
            {
              loading &&
              skelentonProducts.map((item, i) =>
                <ProductSkeleton key={i} />
              )
            }

            {
              !searching ?
                <RenderProducts
                  loading={loading}
                  products={products}
                />
                :
                <RenderProducts
                  loading={loading}
                  products={searchedProducts}
                />
            }

            <RenderProducts
              loading={false}
              products={products}
              condition={DINT_FIND_PRODUCTS}
            />

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