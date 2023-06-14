import React, { ChangeEventHandler, FormEventHandler, useContext, useRef, useState } from 'react'
import CartContext from '@/context/CartContext';
import Link from 'next/link';
import Picture from './Picture'
import Input from './Input';
import Button from './Button';
import Select from './Select';
import { useRouter } from 'next/router';
import { filterByNumbers } from '@/utils';

const navigationList = [
  {
    link: "/",
    label: "Ketchup y Condimentos",
  },
  {
    link: "/",
    label: "Alimentos Infantiles",
  },
  {
    link: "/",
    label: "Otros Productos",
  },
  {
    link: "/",
    label: "Institucionales",
  },
  {
    link: "/",
    label: "Todas las Categorias",
  },
  {
    link: "/login",
    label: "Cerrar Sesión",
  },
]

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
        <div className="flex justify-end py-5">
          <Link href="/cart" className="font-bold text-2xl">
            🛒 <span className="text-xl">{cart.length}</span>
          </Link>
        </div>
      </div>

      <nav className="">

        <div className="navigation">
          <ul>
            {
              navigationList.map(({ link, label }, i) =>
                <li key={i}>
                  <Link href={link}>{label}</Link>
                </li>
              )
            }
          </ul>
        </div>

        {
          router.pathname !== "/" &&
          <div className="Header__default">
            🍔
            <span>Bienvenido <strong className="text-cyan-600">Orlando</strong></span>
          </div>
        }

      </nav>
    </header >
  )
}

export default Header