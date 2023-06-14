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
  const [search, setSearch] = useState<number | "">("")

  const router = useRouter()
  const { cart } = useContext(CartContext)

  const $form = useRef<HTMLFormElement>(null)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    router.push({
      pathname: "/",
      query: {
        search,
      }
    })
    setSearch("")
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if(target.value === ""){
      setSearch(target.value)
    }else{
      const value = filterByNumbers(target.value)
      setSearch(!isNaN(value) ? value : search)
    }
  }

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

        <form ref={$form} className="search-products" onSubmit={handleSubmit}>
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
            <Button type="submit" color="info" className="w-full xx_sm:w-auto !px-8 !rounded-none">Buscar</Button>
          </div>
          <span>Bienvenido <strong className="text-cyan-600">Orlando</strong></span>
        </form>

      </nav>
    </header>
  )
}

export default Header