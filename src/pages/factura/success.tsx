import Button from '@/components/widgets/Button'
import BillsContext from '@/context/BillsContext'
import CartContext from '@/context/CartContext'
import { getFromSStorage } from '@/utils/sessionStorage'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

const BillingSuccess = () => {

  const router = useRouter()
  const { resetCart } = useContext(CartContext)
  const { resetBills } = useContext(BillsContext)
  
  const [renderPage, setRenderPage] = useState<boolean>(true)

  useEffect(() => {
    const confirmed = getFromSStorage<boolean>("bills-confirmation")
    if(confirmed === true){
      
      resetCart()
      resetBills()
      setRenderPage(true)
      
      sessionStorage.removeItem("bills-confirmation")
      
    }else{
      router.push("/")
    }
  }, [])

  return (
    renderPage &&
    <main className="BillingSuccess">
      <div className="main-container">
        <img src="/images/success.png" alt="" />
        <h1 className="title">Se creado el boletín con éxito</h1>
        <button onClick={() => router.push("/")}>
          Ir al inicio
        </button>
      </div>
    </main>
  )
}

export default BillingSuccess