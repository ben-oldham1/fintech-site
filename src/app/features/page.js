import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import Accordion from "@/components/Accordion";
import AssetCard from "@/components/AssetCard";
import FadeIn from "@/components/FadeIn";

export default function Features() {
    const portfolioTrackingAccordion = [
        { title: "Real-time updates", content: "View real-time information on your investments, including current prices, trends, and market changes, ensuring you're always informed about your portfolio's performance." },
        { title: "Comprehensive analytics", content: "Detailed analytics and insights into your portfolio, such as performance over time, asset allocation, and risk assessment, to help you make informed investment decisions." },
        { title: "Custom alerts", content: "Set up custom alerts for your investments, such as price thresholds or performance milestones, so you can act quickly on market opportunities or adjust your strategies." },
    ];

    const easyToUseAccordion = [
        { title: "User-friendly interface", content: "Our intuitive and straightforward app ensures users of all experience levels can navigate and utilise our tools without confusion." },
        { title: "Education and resources", content: "Our educational resources and tutorials will help you learn about a range of investment strategies so you can get the most out of your portfolio." },
        { title: "Integrate with financial accounts", content: "Easily link your various financial accounts for a holistic view of your financial health, including current and savings accounts, to better understand your overall asset distribution." },
    ];

    return (
        <>
            <Container className="mt-16 mb-24">
                <div className="mb-24">
                    <SectionHeader
                        header="Invest in a wide range of assets"
                        subtext="Explore a wide range of investment opportunities, from traditional stocks to the latest cryptocurrencies."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 justify-between">
                        <FadeIn delay={0.4}>
                            <AssetCard
                                title="Stocks"
                                body="Invest in leading companies across various industries and sectors with ease."
                                icon="stocks"
                            />
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <AssetCard
                                title="Crypto"
                                body="Explore the world of digital currencies, including Bitcoin and Ethereum."
                                icon="crypto"
                            />
                        </FadeIn>

                        <FadeIn delay={0.8}>
                            <AssetCard
                                title="Forex"
                                body="Trade in the largest and most liquid market globally."
                                icon="forex"
                            />
                        </FadeIn>

                        <FadeIn delay={1}>
                            <AssetCard
                                title="ETFs"
                                body="Access a diverse range of flexabile and stable investment options."
                                icon="etf"
                            />
                        </FadeIn>

                    </div>
                </div>

                <div className="mb-24">
                    <SectionHeader
                        header="Portfolio tracking"
                        subtext="Keep tabs on your investments with our comprehensive portfolio tracking tools."
                    />

                    <Accordion items={portfolioTrackingAccordion} />
                </div>

                <div className="mb-24">
                    <SectionHeader
                        header="Easy to use"
                        subtext="It doesn't matter whether you're a beginner or a financial expert, everyone can use TradeEase"
                    />

                    <Accordion items={easyToUseAccordion} />
                </div>

            </Container>
        </>
    )
}
