import React from "react";

const Products = (props) => {
  return (
    <div>
      Products
      <span>{props.match.params.id}</span>
    </div>
  );
};

export default Products;
