import { Poppins } from 'next/font/google'
import './globals.css'
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'TradeEase',
  description: 'Take control of your financial future with the TradeEase app.',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}` + ' bg-dark'}>
      <body className='selection:bg-orange selection:text-light'>

        <div className='bg-light'>
          <NavBar />

          {children}

          <Footer />
        </div>

      </body>
    </html>
  )
}
