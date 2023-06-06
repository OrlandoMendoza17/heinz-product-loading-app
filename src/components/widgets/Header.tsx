import React, { useContext } from 'react'
import CartContext from '@/context/CartContext';
import Link from 'next/link';
import Picture from './Picture'
import Input from './Input';
import Button from './Button';
import Select from './Select';

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
  
  const { cart } = useContext(CartContext)
  
  return (
    <header className="Header">
      <Picture className="w-48" url="https://i.imgur.com/hkIgVIM.png" />
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
        
        <form className="search-products">
          <Select title="" defaultOption="Categorías" options={[{ name: "", value: "" }]} />
          <div className="xx_sm:flex items-center">
            <Input id="search" title="" className="w-full" placeholder="🔍 Product SKU" />
            <Button color="info" className="w-full xx_sm:w-auto !px-8 !rounded-none">Buscar</Button>
          </div>
          <span>Bienvenido <strong className="text-cyan-600">Orlando</strong></span>
        </form>
        
        <div>
          <span className="text-cyan-400 font-bold">
            Cart ⮕ <span className="text-red-500">{cart.length}</span>
          </span>
        </div>
        
      </nav>
    </header>
  )
}

export default Header