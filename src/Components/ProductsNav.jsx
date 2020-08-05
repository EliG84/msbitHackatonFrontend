import React, { useRef } from 'react';

const ProductsNav = (props) => {
  let sortInput = useRef(null);
  let searchInput = useRef(null);
  let limitInput = useRef(null);

  const getSortValue = () => {
    props.sort(sortInput.current.value);
  };

  const getSearchValue = () => {
    props.search(searchInput.current.value);
  };

  const getLimitValue = () => {
    props.limit(limitInput.current.value);
  };

  return (
    <div className='row col justify-content-lg-between'>
      <select
        onChange={getSortValue}
        ref={sortInput}
        className='form-control col-12 col-lg-3'>
        <option value=''>Sort By</option>
        <option value='Name a-z'>Name a-z</option>
        <option value='Name z-a'>Name z-a</option>
        <option value='Price ASC'>Price ASC</option>
        <option value='Price DESC'>Price DESC</option>
      </select>
      <div className='row col-12 col-lg-6 justify-content-between m-0'>
        <input
          ref={searchInput}
          type='text'
          className='form-control col-8'
          placeholder='Search Products'
        />
        <button
          onClick={getSearchValue}
          className='btn btn-outline-success col-4'>
          Search
        </button>
      </div>
      <select
        onChange={getLimitValue}
        ref={limitInput}
        className='form-control col-12 col-lg-3'>
        <option value=''>Per Page</option>
        <option value='3'>3 Per Page</option>
        <option value='5'>5 Per Page</option>
        <option value='10'>10 Per Page</option>
      </select>
    </div>
  );
};

export default ProductsNav;
