import Image from "next/image";

import NavBar from "@/components/NavBar";
import StatCard from "@/ui/StatCard";

export default function Home() {
  return (
    <>
      <NavBar />

      {/* THE HERO SECTION */}
      <section className='bg-gray-light'>
        <div className='py-32 px-10 grid grid-cols-1 gap-4 md:grid-cols-5'>
          <div className="md:col-span-3">
            <p className='text-xl font-light'>iPhone app of the year 2024</p>
            <h1 className='text-6xl my-2 font-bold'>Take charge of your financial future with confidence and ease</h1>
            <p className="text-md font-light">14 day free trial</p>
          </div>
          <div>
            <Image src={'/img-assets/iphone-mockup.png'} width={200} height={200} />
          </div>
        </div>
      </section>

      {/* GENERAL INFO SECTION */}
      <section className='bg-light'>
        <div className='py-32 px-10 grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div>
            <h2 className="text-3xl">TradeEase provides a seamless platform for buying and selling stocks, crypto and more, all at your fingertips.</h2>
          </div>
          <div>

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <StatCard stat={'113k'} desc={'Users'} />
              </div>
              <div>
                <StatCard stat={'27'} desc={'Countries'} />
              </div>
              <div className="col-span-2">
                <StatCard stat={'£11m'} desc={'In transactions, daily'} />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
