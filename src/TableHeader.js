import React from "react";

const TableHeader = ({ column, handleClick, direction }) => {
  return (
    <th onClick={handleClick}>
      {column.header}
      <i className={direction} />
    </th>
  );
};

export default TableHeader;
