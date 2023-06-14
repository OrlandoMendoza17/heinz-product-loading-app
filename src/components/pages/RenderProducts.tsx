import React from 'react'
import ProductItem from './ProductItem'

type Props = {
  loading: boolean,
  products: Product[],
  condition?: boolean,
  children?: React.ReactNode,
}

const RenderProducts = ({ loading, condition, products }: Props) => {
  
  condition = condition ?? Boolean(products.length)
  
  return (
    <>
      {
        !loading &&
        <>
          {
            condition &&
            products.map(product =>
              <ProductItem key={product.sku} product={product} />
            )
          }
        </>
      }
    </>
  )
}

export default RenderProducts