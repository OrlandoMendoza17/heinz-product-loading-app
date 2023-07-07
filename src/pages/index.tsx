import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Header from "@/components/widgets/Header/Header";
import Aside from '@/components/pages/Aside';
import NotificationModal from '@/components/widgets/NotificationModal';
import ProductFinder from '@/components/pages/ProductFinder';
import Products from '@/components/pages/Products';
import ProductSkeleton from '@/components/pages/ProductSkeleton';
import useNotification from '@/hooks/useNotification';
import getDumbProducts from "@/utils/getProducts";
import { getProducts } from '@/services/products-id';
import { getFromSStorage, saveToSStorage } from '@/utils/sessionStorage';

const Home: NextPage = () => {

  const [products, setProducts] = useState<Product[]>([])

  const [searching, setSearching] = useState<boolean>(false)
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([])

  const [loading, setLoading] = useState(true)
  const { notification, handleNotification } = useNotification()

  useEffect(() => {
    (async () => {
      setLoading(true)

      const products = getFromSStorage<Product[]>("products")
      
      const logUndefinedPrices = (products: Product[]) =>{
        console.log(products.filter((item) => item.price === -100))
      }
      
      if(products){
        logUndefinedPrices(products)
        
        setProducts(products)
        setLoading(false)
        
      }else{
        try {
          
          const products = await getProducts()
          logUndefinedPrices(products)
  
          saveToSStorage("products", products)
  
          setProducts(products)
          setLoading(false)
  
        } catch (error) {
          console.log(error)
          setLoading(false)
  
          handleNotification.open({
            type: "danger",
            title: "Carga de productos ❌",
            message: `Ha ocurrido un error al intentar traer los productos, recargue la pagina e intentelo de nuevo`
          })
        } 
      }
      
    })()
  }, [])
  
  const skelentonProducts = new Array(12).fill(0)

  const NO_PRODUCTS = !Boolean(products.length)
  const NOT_FOUND_PRODUCTS = (searching && !Boolean(searchedProducts.length))

  const DINT_FIND_PRODUCTS = (NO_PRODUCTS || NOT_FOUND_PRODUCTS)

  return (
    <div className="Home px-4 md:px-24 pb-20">
      <Header products={products}/>

      <ProductFinder
        {...{
          loading,
          products,
          setSearching,
          setSearchedProducts,
          DINT_FIND_PRODUCTS,
        }}
      />

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
                <Products
                  loading={loading}
                  products={products}
                />
                :
                <Products
                  loading={loading}
                  products={searchedProducts}
                />
            }

            <Products
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