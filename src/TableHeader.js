import React from "react";

const TableHeader = ({ name, handleClick, direction }) => {
  return (
    <th onClick={handleClick}>
      {name}
      <i className={direction} />
    </th>
  );
};

export default TableHeader;
