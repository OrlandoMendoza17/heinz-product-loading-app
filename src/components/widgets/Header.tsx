import React, { useContext } from 'react'
import CartContext from '@/context/CartContext';
import Link from 'next/link';
import Picture from './Picture'
import { useRouter } from 'next/router';
import { RiFilePaperFill } from "react-icons/ri";
import { FaBriefcase, FaBottleWater, FaArrowRightToBracket } from "react-icons/fa6";

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
const Header = () => {

  const router = useRouter()
  const { cart } = useContext(CartContext)

  return (
    <header className="Header">

      <div className="flex justify-between items-center">
        <Link href="/">
          <Picture className="w-48" url="https://i.imgur.com/j4F3kJ3.png" />
          {/* <Picture className="w-48" url="https://i.imgur.com/hkIgVIM.png" /> */}
        </Link>
        <div className="py-5">
          <Link href="/cart" className="font-bold text-2xl">
            🛒 <span className="text-xl">{cart.length}</span>
          </Link>
        </div>
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
        </ul>
        <Link href="/login">
          <FaArrowRightToBracket/> Cerrar Sesión
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