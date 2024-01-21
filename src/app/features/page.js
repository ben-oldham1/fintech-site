import SectionHeader from "@/components/SectionHeader";
import Accordion from "@/components/Accordion";
import AssetCard from "@/components/AssetCard";
import FadeIn from "@/ui/FadeIn";

export default function Features() {
    const accordionItems = [
        { title: 'Section 1', content: 'Content for section 1...' },
        { title: 'Section 2', content: 'Content for section 2...' },
        // Add more sections as needed
    ];

    return (
        <>
            <section className="my-24 mx-12 lg:mx-32">
                <SectionHeader
                    header="Invest in a wide range of assets"
                    subtext="Explore a wide range of investment opportunities, from traditional stocks to the latest cryptocurrencies"
                />

                <div className="grid grid-cols-2 gap-24 justify-between">
                    <FadeIn delay={0.4}>
                        <AssetCard
                            title="Stocks"
                            body="Invest in leading companies across various industries and sectors with ease."
                            iconClass="bi bi-buildings"
                        />
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <AssetCard
                            title="Crypto"
                            body="Explore the world of digital currencies, including Bitcoin and Ethereum."
                            iconClass="bi bi-coin"
                        />
                    </FadeIn>

                    <FadeIn delay={0.8}>
                        <AssetCard
                            title="Forex"
                            body="Trade in the largest and most liquid market globally."
                            iconClass="bi bi-globe"
                        />
                    </FadeIn>

                    <FadeIn delay={1}>
                        <AssetCard
                            title="ETFs"
                            body="Access a diverse range of flexabile and stable investment options."
                            iconClass="bi bi-graph-up"
                        />
                    </FadeIn>

                </div>
            </section>


            <section className="my-24 mx-12 lg:mx-32">
                <SectionHeader
                    header="Portfolio tracking"
                    subtext="Keep tabs on your investments with our comprehensive portfolio tracking tools."
                />

                <Accordion items={accordionItems} />
            </section>
        </>
    )
}
