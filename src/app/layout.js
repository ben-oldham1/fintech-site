import { Poppins } from 'next/font/google'
import './globals.css'
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
      <body className='selection:bg-orange selection:text-light'>

        <NavBar />

        {children}


        <Footer />
      </body>
    </html>
  )
}
