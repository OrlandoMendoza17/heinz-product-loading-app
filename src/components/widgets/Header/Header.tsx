import React, { useContext } from 'react'
import CartContext from '@/context/CartContext';
import Link from 'next/link';
import Picture from '../Picture'
import { useRouter } from 'next/router';
import { RiFilePaperFill } from "react-icons/ri";
import { FaBriefcase, FaBottleWater, FaArrowRightToBracket, FaAngleRight, FaXmark } from "react-icons/fa6";
import Cart from './Cart';
const XLSX = require('../../../../node_modules/xlsx/xlsx.js')

const navigationList = [
  {
    link: "/mis-ordenes",
    label: "Mis Ordenes",
    Icon: RiFilePaperFill
  },
  {
    link: "/activar-ficha",
    label: "Activar Ficha",
    Icon: FaBriefcase
  },
  {
    link: "/activar-producto",
    label: "Activar Producto",
    Icon: FaBottleWater
  },
]

// {
//   link: "/login",
//   label: "Cerrar Sesión",
// },

type Props = {
  products?: Product[]
}

const Header = ({ products }: Props) => {

  const router = useRouter()

  const handleDownloadInventory = () => {
    if (products && products.length) {
      const availableProducts = products.filter(product => product.available)
      const formattedProducts = availableProducts.map(product =>{
        return({
          SKU: product.sku,
          NOMBRE: product.name,
          STOCK: product.available,
          PRECIO: product.price,
        })
      })
      const workbook = XLSX.utils.book_new()
      const worksheet = XLSX.utils.json_to_sheet(formattedProducts)

      XLSX.utils.book_append_sheet(workbook, worksheet, "Hoja 1")
      XLSX.writeFile(workbook, `Inventario de Productos.xlsx`)
    }
  }

  return (
    <header className="Header">

      <div className="flex justify-between items-center">
        <Link href="/">
          <Picture className="w-48" url="https://i.imgur.com/j4F3kJ3.png" />
          {/* <Picture className="w-48" url="https://i.imgur.com/hkIgVIM.png" /> */}
        </Link>
        <Cart />
      </div>

      <nav className="font-bold">
        <span className="sm:hidden">🍔</span>
        <ul>
          {
            navigationList.map(({ link, label, Icon }, i) =>
              <li key={i}>
                <Link href={link}><Icon /> {label}</Link>
              </li>
            )
          }
          <li onClick={handleDownloadInventory} className="cursor-pointer">
            <span><FaBriefcase /> Descargar inventario</span>
          </li>
        </ul>
        <Link href="/login">
          <FaArrowRightToBracket /> Cerrar Sesión
        </Link>
      </nav>
      {
        router.pathname !== "/" &&
        <div className="Header__default">
          <span></span>
          <span>Bienvenido <strong className="text-cyan-600">Orlando</strong></span>
        </div>
      }
    </header >
  )
}

export default Header