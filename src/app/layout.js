import { Poppins } from 'next/font/google'
import './globals.css'

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import Script from "next/script";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export const metadata = {
  title: 'TradeEase | Ben Oldham Porfolio',
  description: 'Take control of your financial future with the TradeEase app.',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} bg-dark w-screen`}>
      <body className='selection:bg-orange selection:text-light font-sans'>

        <div className='bg-light'>
          <NavBar />

          {children}

          <Footer />
        </div>

      </body>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `}
      </Script>
    </html>
  )
}
