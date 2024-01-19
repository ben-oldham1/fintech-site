import Head from 'next/head';

import { Poppins } from 'next/font/google'
import './globals.css'
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
