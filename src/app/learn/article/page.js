import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Article() {

    return (
        <>
            <div className="flex flex-row m-12 mx-16 lg:mx-32">
                <div className="basis-3/5">
                    <header className='mb-5'>
                        <div className='mb-5'>
                            <span className="border-2 border-dark text-dark py-1 px-3 rounded-full text-sm font-bold">Example Article</span>
                        </div>

                        <h1 className='text-4xl font-bold mb-3'>A beginners guide to blockchain</h1>

                        <div className="flex justify-between ...">
                            <p>By John Smith</p>
                            <p>24 Jan 2024</p>
                        </div>
                    </header>

                    <section>

                        <figure className='mb-4'>
                            <Image src="/article/blockchain-img1.jpg" width={800} height={800} />
                            <figcaption className='opacity-50 text-sm'>
                                Image attribution via Pexels
                            </figcaption>
                        </figure>

                        <p className='mb-2 font-semibold text-lg'>
                            In recent years, the term "blockchain" has become synonymous with the world of cryptocurrencies, especially with the rise of Bitcoin and other digital assets. While the concept may seem complex at first glance, understanding blockchain is essential for anyone looking to delve into the fascinating realm of cryptocurrencies. In this beginner's guide, we will demystify blockchain technology and explore its role in the world of digital currencies.
                        </p>

                        <p className='mb-2'>
                            At its core, a blockchain is a decentralized and distributed ledger that records transactions across a network of computers. Unlike traditional centralized systems, such as banks, where a single authority oversees transactions, blockchain operates on a peer-to-peer network, making it more secure and transparent.
                        </p>

                        <h2 className='mt-6 mb-2 text-2xl font-bold' id='What is Blockchain'>What is Blockchain?</h2>
                        <p className='mb-2'>
                            Imagine a chain of blocks, where each block contains a list of transactions. Once a block reaches its capacity, a new block is added to the chain, creating a chronological and unalterable record of transactions. This chain is maintained by a network of computers, often referred to as nodes, each holding a copy of the entire blockchain.
                        </p>

                        <h2 className='mt-6 mb-2 text-2xl font-bold' id='Decentralization and Trust'>Decentralization and Trust</h2>
                        <p className='mb-2'>
                            One of the key features of blockchain is its decentralized nature. Instead of relying on a single entity, such as a bank or government, to verify and validate transactions, blockchain distributes this responsibility across a network of nodes. Each node has a copy of the entire blockchain, and for a transaction to be considered valid, it must be approved by a majority of nodes through a consensus mechanism.
                        </p>
                        <p className='mb-2'>
                            This decentralization not only enhances security but also eliminates the need for intermediaries. Trust is established through mathematics and cryptography, reducing the risk of fraud and manipulation.
                        </p>
                        <figure className='mb-4'>
                            <Image src="/article/blockchain-diagram.jpeg" width={800} height={800} />
                            <figcaption className='opacity-50 text-sm'>
                                Image attribution via <Link href={'https://prev.slalom.com/insights/how-blockchain-will-disrupt-your-industry'}>slalom.com</Link>
                            </figcaption>
                        </figure>

                        <h2 className='mt-6 mb-2 text-2xl font-bold' id='Cryptocurrencies and Blockchain'>Cryptocurrencies and Blockchain</h2>
                        <p className='mb-2'>
                            Cryptocurrencies are digital or virtual currencies that use cryptography for security and operate on blockchain technology. Bitcoin, the first and most well-known cryptocurrency, introduced the concept of a decentralized digital currency, enabling peer-to-peer transactions without the need for a central authority.
                        </p>
                        <p className='mb-2'>
                            When someone initiates a cryptocurrency transaction, it is broadcasted to the network and grouped with other transactions into a block. Miners, participants in the network who use computational power to solve complex mathematical puzzles, compete to validate and add the block to the blockchain. The first miner to solve the puzzle is rewarded with newly minted cryptocurrency and transaction fees.
                        </p>

                        <h2 className='mt-6 mb-2 text-2xl font-bold' id='Transparency and Immutability'>Transparency and Immutability</h2>
                        <p className='mb-2'>
                            The transparency of blockchain is a crucial aspect that contributes to its trustworthiness. Anyone can view the entire transaction history on the blockchain, fostering accountability and reducing the risk of corruption. Once a block is added to the chain, it becomes virtually impossible to alter or delete past transactions due to the cryptographic link between blocks.
                        </p>

                        <h2 className='mt-6 mb-2 text-2xl font-bold' id='Smart Contracts'>Smart Contracts</h2>
                        <p className='mb-2'>
                            Blockchain technology also enables the creation and execution of smart contracts, self-executing contracts with the terms of the agreement directly written into code. Smart contracts automatically enforce and execute predefined rules, eliminating the need for intermediaries and streamlining various processes, such as legal agreements, supply chain management, and more.
                        </p>

                        <h2 className='mt-6 mb-2 text-2xl font-bold' id='Conclusion'>Conclusion</h2>
                        <p className='mb-2'>
                            As you embark on your journey into the world of cryptocurrencies, understanding blockchain is essential. Its decentralized, transparent, and secure nature has not only revolutionized the financial industry but also opened the door to countless possibilities across various sectors. By grasping the fundamentals of blockchain, you'll be better equipped to navigate the exciting and ever-evolving landscape of digital currencies.
                        </p>

                    </section>

                </div>

                <div className="basis-2/5 px-10">
                    <aside className='fixed'>

                        <div>
                            <p className='text-xl font-bold'>Further reading</p>
                            <ul>
                                <li>Subtitle 1</li>
                                <li>Subtitle 2</li>
                                <li>Subtitle 3</li>
                            </ul>
                        </div>

                        <div className='mt-5'>
                            <p className='text-xl font-bold'>Key takeaways</p>

                            <ul>
                                <li>Subtitle 1</li>
                                <li>Subtitle 2</li>
                                <li>Subtitle 3</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    )
}
