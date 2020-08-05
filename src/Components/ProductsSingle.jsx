import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const ProductSingle = (props) => {
  const tilt = useRef(null);
  const options = {
    scale: 1.0,
    speed: 1000,
    max: 10,
  };

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  });

  return (
    <div
      ref={tilt}
      options={options}
      className='container-fluid d-flex flex-lg-row flex-column border border-1 p-2 m-1 '>
      <img src={props.item.thumbnailUrl} alt={props.item.name} />
      <div className='d-flex flex-column justify-content-between pl-3 pt-lg-0 pt-3'>
        <h3>{props.item.name}</h3>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
};

export default ProductSingle;
