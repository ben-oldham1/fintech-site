import SectionHeader from "@/components/SectionHeader";
import BulletPoint from "@/components/BulletPoint";
import Accordion from "@/components/Accordion";
import EmailSignup from "@/components/EmailSignup";
import FadeIn from "@/components/FadeIn";

export default function Company() {
    const accordionItems = [
        { title: 'Monitoring at a glance', content: 'Enjoy real-time financial insights with our user-friendly dashboard. Designed for efficiency, it allows you to quickly understand your financial landscape through intuitive graphics and essential metrics. Stay informed, effortlessly.' },
        { title: 'Current & historical data', content: 'Access comprehensive data with ease. Our platform provides not only the latest financial information but also historical data, enabling you to track trends, analyze performance over time, and make informed decisions based on a rich data history.' },
        { title: 'Price & market alerts', content: 'Never miss an important market movement again. Set personalised alerts for price changes and market news directly within the app. Stay ahead with timely notifications that keep you informed of the financial changes that matter to you.' },
    ];

    return (
        <>
            <section className="mt-24 mb-32 mx-12 lg:mx-32">
                <SectionHeader
                    header="Sign up to the TradeEase newsletter"
                    subtext="A weekly summary of the latest news and insights, direct from our experts."
                />

                <div className="flex flex-row justify-center">
                    <EmailSignup variant="light" />
                </div>
            </section>

            <section className="my-24 mx-12 lg:mx-32">
                <SectionHeader
                    header="Customer service"
                    subtext="With customer support that’s second to none, you can be sure you’ll always find the answers you need."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FadeIn delay={0.4}>
                        <BulletPoint text="Speak to a real human 24/7 with in-app live chat" />
                    </FadeIn>

                    <FadeIn delay={0.8}>
                        <BulletPoint text="96%* of users would recommend our customer service" />
                    </FadeIn>

                    <FadeIn delay={0.8}>
                        <BulletPoint text="Our customer service team are highly trained and knowledgable on finance" />
                    </FadeIn>

                    <FadeIn delay={0.8}>
                        <BulletPoint text="Get instant answers with our comprehensive online help centre" />
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <BulletPoint text="Priority support for premium users" />
                    </FadeIn>

                </div>

                <div className="flex flex-row justify-center mt-5">
                    <p className="text-sm text-gray">
                        *In a recent survey of 1825 users
                    </p>
                </div>
            </section>

            <section className='bg-light'>
                <div className='pb-16 md:pb-20 px-10 grid grid-cols-1 gap-16 md:gap-32 md:grid-cols-2'>

                    <div className="self-center">
                        <FadeIn delay={0.2}>
                            <h2 className="text-3xl mb-5 font-bold">What drives us?</h2>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <p className="text-2xl">Our mission is to break down the barriers to investing by educating and empowering our users to make informed financial decisions.</p>
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
