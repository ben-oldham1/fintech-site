import React from 'react';

const FilterBadge = (props) => {
  const isActive = props.active;

  const activeStyle = "bg-orange border-orange border-2 text-light";
  const inactiveStyle = "border-2 border-dark text-dark hover:bg-light";

  const handleClick = () => {
    props.onClick(props.filterId);
  };

  return (
    <div onClick={handleClick} className={(isActive ? activeStyle : inactiveStyle) + " py-1 px-3 rounded-full cursor-pointer text-sm font-bold"}>
      {props.label}
    </div>
  );
};

export default FilterBadge;
