import type { AppProps } from 'next/app';
import CartContextProvider from '@/context/CartContextProvider'
import "tailwindcss/tailwind.css"
import '../styles/App.scss'
import BillsContextProvider from '@/context/BillsContextProvider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <BillsContextProvider>
        <Component {...pageProps} />
      </BillsContextProvider>
    </CartContextProvider>
  );
}