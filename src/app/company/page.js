import SectionHeader from "@/components/SectionHeader";
import BulletPoint from "@/components/BulletPoint";
import Accordion from "@/components/Accordion";
import EmailSignup from "@/components/EmailSignup";
import FadeIn from "@/ui/FadeIn";

export default function Company() {
    const accordionItems = [
        { title: 'Monitoring at a glance', content: 'View your portfolio diversification and track individual asset performance. View your portfolio diversification and track individual asset performance. View your portfolio diversification and track individual asset performance.' },
        { title: 'Current & historical data', content: 'Content for section 2...' },
        { title: 'Price & market alerts', content: 'Content for section 3...' },
    ];

    return (
        <>
            <section className="my-24 mx-12 lg:mx-32">
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

                <div className="grid grid-cols-2 gap-4">
                    <FadeIn delay={0.4}>
                        <BulletPoint text="Speak to a real human 24/7 with in-app live chat" />
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <BulletPoint text="Priority support for premium users" />
                    </FadeIn>

                    <FadeIn delay={0.8}>
                        <BulletPoint text="96%* of users would recommend our customer service" />
                    </FadeIn>

                    <FadeIn delay={0.8}>
                        <BulletPoint text="96%* of users would recommend our customer service" />
                    </FadeIn>

                    <FadeIn delay={0.8}>
                        <BulletPoint text="96%* of users would recommend our customer service" />
                    </FadeIn>
                </div>

                <div className="flex flex-row justify-center mt-5">
                    <p className="text-sm text-gray">
                        *In a recent survey of 1825 users
                    </p>
                </div>
            </section>

            <section className='bg-light'>
                <div className='py-16 md:py-24 px-10 grid grid-cols-1 gap-16 md:gap-32 md:grid-cols-2'>

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
