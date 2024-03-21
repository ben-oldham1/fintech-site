import Image from "next/image";

import StatCard from "@/ui/StatCard";
import Button from "@/ui/Button";
import FadeIn from "@/ui/FadeIn";
import Accordion from "@/components/Accordion";
import AsSeen from "@/components/AsSeen";

export default function Home() {
  const accordionItems = [
    { title: 'Stocks', content: 'Invest in leading companies across various industries and sectors with ease.' },
    { title: 'Crypto', content: 'Explore the world of digital currencies, including Bitcoin and Ethereum.' },
    { title: 'Forex', content: 'Trade in the largest and most liquid market globally.' },
    { title: 'ETFs', content: 'Access a diverse range of flexabile and stable investment options.' },
  ];

  return (
    <>
      {/* THE HERO SECTION */}
      <section>
        <div className='md:h-[calc(100vh-56px)] px-8 gap-8 md:px-32 grid grid-cols-1 py-16 lg:py-0 lg:grid-cols-5 lg:gap-8 xl:gap-20 items-center'>
          <div className="hidden lg:block">
            <Image src={'/img-assets/home-screenshot.png'} width={350} height={350} />
          </div>
          <div className="lg:hidden w-1/2">
            <Image src={'/img-assets/home-screenshot-half.png'} width={350} height={350} />
          </div>
          <div className="lg:col-span-4">
            <p className='text-xl font-light'><i className="bi bi-award"></i> iPhone app of the year (2024)</p>
            <h1 className='text-4xl lg:text-5xl my-2 leading-tight font-bold'>Take charge of your financial future with confidence and ease</h1>
            <p className="text-md font-light">14 day free trial</p>

            <div className="mt-8 lg:mt-16 flex flex-row gap-x-2">
              <Image src={'/img-assets/app-store.svg'} width={0} height={0} style={{ width: 'auto', height: '40px' }} />
              <Image src={'/img-assets/play-store.svg'} width={0} height={0} style={{ width: 'auto', height: '40px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 'AS FEATURED' SECTION */}
      <AsSeen />

      {/* GENERAL INFO SECTION ONE */}
      <section className='bg-light'>
        <div className='py-16 md:py-32 px-10 grid grid-cols-1 gap-16 md:gap-32 md:grid-cols-2'>
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
        <div className='py-16 md:py-24 px-10 grid grid-cols-1 gap-16 md:gap-32 md:grid-cols-5'>
          <div className="md:col-span-2 mx-auto">
            <img className="z-10" src={'/img-assets/home-screenshot-circle.png'} width={250} height={150} />
          </div>

          <div className="md:col-span-3 self-center">
            <FadeIn delay={0.2}>
              <h2 className="text-3xl mb-5 font-bold">See your portfolio at a glance</h2>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-2xl">Keep tabs on your investments with comprehensive portfolio tracking tools.</p>
            </FadeIn>
          </div>
        </div>

      </section>

      {/* GENERAL INFO SECTION THREE */}
      <section className='bg-light'>
        <div className='py-16 md:py-24 px-10 grid grid-cols-1 gap-16 md:gap-32 md:grid-cols-2'>

          <div className="self-center">
            <FadeIn delay={0.2}>
              <h2 className="text-3xl mb-5 font-bold">Invest in a wide range of assets</h2>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-2xl">Explore a wide range of investment opportunities, from traditional stocks to the latest cryptocurrencies.</p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8">
                <Button href="/download" variant="orange">
                  Start investing
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="self-center">
            <Accordion items={accordionItems} />
          </div>

        </div>

      </section>
    </>
  )
}
