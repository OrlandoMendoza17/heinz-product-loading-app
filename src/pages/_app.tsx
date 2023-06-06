import type { AppProps } from 'next/app';
import CartContextProvider from '@/context/CartContextProvider'
import "tailwindcss/tailwind.css"
import '../styles/App.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}