import SectionHeader from "@/components/SectionHeader";
import BulletPoint from "@/components/BulletPoint";
import Accordion from "@/components/Accordion";
import FadeIn from "@/ui/FadeIn";

export default function Company() {
    const accordionItems = [
        { title: 'Monitoring at a glance', content: 'View your portfolio diversification and track individual asset performance.' },
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
            </section>

            <section className="my-24 mx-12 lg:mx-32">
                <SectionHeader
                    header="Customer service"
                    subtext="With customer support that’s second to none, you can be sure you’ll always find the answers you need."
                />

                <div class="grid grid-cols-2 gap-4">
                    <FadeIn delay={0.4}>
                        <BulletPoint text="Speak to a real human 24/7 with in-app live chat" />
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <BulletPoint text="Priority support for premium users" />
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

            <section className="my-24 mx-12 lg:mx-32">
                <SectionHeader
                    header="What drives us"
                    subtext="Our mission is to break down the barriers to investing. We aim to provide a user-friendly, intuitive platform that not only facilitates trading, but also educates and empowers our users to make informed financial decisions."
                />

                <Accordion items={accordionItems} />

            </section>
        </>
    )
}
