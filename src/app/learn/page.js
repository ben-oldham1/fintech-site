"use client"

import React, { useState } from 'react';

import SectionHeader from "@/components/SectionHeader";
import FilterRow from "@/components/FilterRow";
import ArticleCard from "@/components/ArticleCard";

import Articles from "@/data/Articles";

export default function Learn() {

    // State for the current active filter
    const [activeFilter, setActiveFilter] = useState("All articles");

    return (
        <>
            <section className="my-24 mx-12 lg:mx-32">
                <SectionHeader
                    header="Learn about finance and investments"
                    subtext="Our articles are written by industry experts, covering a range of topics to help you get more from your investments."
                />

                <FilterRow activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {
                        Articles.map((item, index) => (
                            item.topic == activeFilter || activeFilter == "All articles"
                                ?
                                <ArticleCard key={index} articleData={item} />
                                : null
                        ))
                    }
                </div>
            </section>
        </>
    )
}
