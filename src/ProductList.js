import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <>
      {products.map((item, index) => (
        <Product
          key={index}
          title={item.title}
          category={item.category}
          imgUrl={item.imgUrl}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </>
  );
}

export default ProductList;
