import React from 'react';
import FilterBadge from "./FilterBadge";

export default function FilterRow(props) {

    const activeFilter = props.activeFilter;

    const handleFilterClick = (filterId) => {
        props.setActiveFilter(filterId);
    };

    return (
        <div className="flex space-x-2 space-y-2 flex-wrap justify-center items-baseline mb-5">
            <FilterBadge label="All articles" filterId={"All articles"} active={activeFilter === "All articles"} onClick={handleFilterClick} />
            <FilterBadge label="Crypto" filterId={"Crypto"} active={activeFilter === "Crypto"} onClick={handleFilterClick} />
            <FilterBadge label="Stocks" filterId={"Stocks"} active={activeFilter === "Stocks"} onClick={handleFilterClick} />
            <FilterBadge label="Markets" filterId={"Markets"} active={activeFilter === "Markets"} onClick={handleFilterClick} />
        </div>
    )
}