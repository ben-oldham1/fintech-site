import Image from "next/image";

import StatCard from "@/components/StatCard";
import Container from "@/components/Container";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import Accordion from "@/components/Accordion";
import AsSeen from "@/components/AsSeen";

import { ShieldCheck, MessageCircleMore, Vault } from "lucide-react";

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
      <Container className="mb-12 md:py-24">
        <div className="flex flex-col-reverse md:flex-row gap-12">
          <div className="basis-1/2">
            <div className="border-2 border-dark rounded-full py-1 px-3 text-xs uppercase font-semibold w-fit mb-4">
              <p>Trusted by 100,000+ users</p>
            </div>
            <h1 className='text-4xl leading-tight lg:text-6xl lg:leading-none font-bold mb-6'>The smarter way to <span className="text-orange">invest</span></h1>
            <p className="text-xl mb-6">Experience a trading platform designed for clarity. Real-time insights, expert-curated portfolios, and security you can bank on.

            </p>
            <div className="flex flex-row gap-2 mb-8 lg:mb-16">
              <Image src={'/img-assets/app-store.svg'} width={0} height={0} style={{ width: 'auto', height: '40px' }} />
              <Image src={'/img-assets/play-store.svg'} width={0} height={0} style={{ width: 'auto', height: '40px' }} />
            </div>

            <div className="max-w-96">
              {/* 'AS FEATURED' SECTION */}
              <AsSeen />
            </div>
          </div>
          <div className="basis-1/2 flex items-center justify-center">
            <Image src={'/img-assets/herographic.png'} className="h-72 w-auto object-contain" width={1200} height={1200} />
          </div>
        </div>

        <div className="bg-dark text-light rounded-md flex flex-col md:flex-row gap-4 items-center justify-between p-5 mt-12 md:mt-32">
          <div className="flex flex-row gap-2">
            <ShieldCheck />
            <p className="font-semibold">
              Fully FCA regulated
            </p>
          </div>
          <hr className="border-light md:hidden opacity-20 w-full" />
          <div className="flex flex-row gap-2">
            <MessageCircleMore />
            <p className="font-semibold">
              24/7 human support
            </p>
          </div>
          <hr className="border-light md:hidden opacity-20 w-full" />
          <div className="flex flex-row gap-2">
            <Vault />
            <p className="font-semibold">
              Bank-level security
            </p>
          </div>
        </div>
      </Container>


      {/* GENERAL INFO SECTION ONE */}
      <Container className="pb-16 md:pb-24">
        <div className='grid grid-cols-1 gap-16 md:gap-32 md:grid-cols-2'>
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
      </Container>


      {/* GENERAL INFO SECTION TWO */}
      <Container className="pb-16 md:pb-24">
        <div className='py-16 md:py-24 grid grid-cols-1 gap-16 md:gap-32 md:grid-cols-5'>
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

      </Container>

      {/* GENERAL INFO SECTION THREE */}
      <Container className="pb-16 md:pb-24">
        <div className='py-16 md:py-24 grid grid-cols-1 gap-16 md:gap-32 md:grid-cols-2'>

          <div className="self-center">
            <FadeIn delay={0.2}>
              <h2 className="text-3xl mb-5 font-bold">Invest in a wide range of assets</h2>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-2xl">Explore a wide range of investment opportunities, from traditional stocks to the latest cryptocurrencies.</p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8">
                <Button href="https://www.benoldham.dev" variant="orange">
                  Start investing
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="self-center">
            <Accordion items={accordionItems} />
          </div>

        </div>
      </Container>

    </>
  )
}
