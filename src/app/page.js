import Image from "next/image";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StatCard from "@/ui/StatCard";
import Button from "@/ui/Button";
import FadeIn from "@/ui/FadeIn";

export default function Home() {
  return (
    <>
      <NavBar />

      {/* THE HERO SECTION */}
      <section className='bg-gray-light'>
        <div className='h-[calc(100vh-56px)] px-10 grid grid-cols-1 items-center gap-4 md:grid-cols-5'>
          <div className="md:col-span-3">
            <p className='text-xl font-light'>iPhone app of the year (2024)</p>
            <h1 className='text-6xl my-2 leading-tight font-bold'>Take charge of your financial future with confidence and ease</h1>
            <p className="text-md font-light">14 day free trial</p>

            <div className="mt-16 flex flex-row gap-x-2">
              <Image src={'/img-assets/app-store.svg'} width={0} height={0} style={{ width: 'auto', height: '40px' }} />
              <Image src={'/img-assets/play-store.svg'} width={0} height={0} style={{ width: 'auto', height: '40px' }} />
            </div>
          </div>
          <div className="hidden md:block">
            <Image src={'/img-assets/iphone-mockup.png'} width={200} height={200} />
          </div>
        </div>
      </section>

      {/* GENERAL INFO SECTION ONE */}
      <section className='bg-light'>
        <div className='py-32 px-10 grid grid-cols-1 gap-32 md:grid-cols-2'>
          <div>
            <FadeIn delay={0.2}>
              <p className="text-3xl mb-8">
                TradeEase provides a seamless platform for buying and selling stocks, crypto and more, all at your fingertips.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Button href="/features" variant="orange">
                See features
              </Button>
            </FadeIn>
          </div>

          <div>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <FadeIn delay={0.2}>
                  <StatCard stat={'113k'} desc={'Users'} />
                </FadeIn>
              </div>
              <div>
                <FadeIn delay={0.4}>
                  <StatCard stat={'27'} desc={'Countries'} />
                </FadeIn>
              </div>
              <div className="col-span-2">
                <FadeIn delay={0.6}>
                  <StatCard stat={'£11m'} desc={'In transactions, daily'} />
                </FadeIn>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GENERAL INFO SECTION TWO */}
      <section className='bg-light'>
        <div className='py-32 px-10 grid grid-cols-1 gap-32 md:grid-cols-2'>

          <div className="mx-auto">
            <img src={'/img-assets/iphone-mockup.png'} width={250} height={250} />
          </div>

          <div className="">
            <FadeIn delay={0.2}>
              <h2 className="text-3xl mb-5 font-bold">See your portfolio at a glance</h2>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-2xl">Keep tabs on your investments with comprehensive portfolio tracking tools.</p>
            </FadeIn>
          </div>

        </div>

      </section>

      <Footer />
    </>
  )
}
