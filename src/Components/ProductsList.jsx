import React, { useState, useEffect } from 'react';
import ProductSingle from './ProductsSingle';

const ProductsList = (props) => {
  let [localProducts, setLocalProcuts] = useState([]);

  useEffect(() => {
    setLocalProcuts(props.products);
  }, [props.products, props.updated]);

  return (
    <>
      {localProducts.map((item, i) => (
        <ProductSingle key={i} item={item} />
      ))}
    </>
  );
};

export default ProductsList;
