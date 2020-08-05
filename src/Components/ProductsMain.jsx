import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Api from '../Services/apiServ';
import CircleLoader from './ProductsCircleLoader';
import Header from './ProductsHeader';
import PageSelector from './ProductsPageSelector';
import ProductsNav from './ProductsNav';
import ProductsList from './ProductsList';

const ProductsMain = (props) => {
  let history = useHistory();

  let [products, setProducts] = useState([]);
  let [pages, setPages] = useState(0);
  let [querySearch, setQuerySearch] = useState('');
  let [queryLimit, setQueryLimit] = useState(5);
  let [queryPage, setQeuryPage] = useState(1);
  let [updated, setUpdated] = useState(0);

  useEffect(() => {
    Api.getProducts(props.location.search).then((data) => {
      setProducts(data.products);
      setPages(data.totalPages);
    });
  }, [props]);

  const sortBy = (param) => {
    if (!products.length) return;
    switch (param) {
      case 'Name a-z':
        products.sort(
          (a, b) => Number(a.name.slice(8)) - Number(b.name.slice(8))
        );
        setUpdated(updated + 1);
        break;
      case 'Name z-a':
        products
          .sort((a, b) => Number(a.name.slice(8)) - Number(b.name.slice(8)))
          .reverse();
        setUpdated(updated + 1);
        break;
      case 'Price ASC':
        products.sort((a, b) => a.price - b.price);
        setUpdated(updated + 1);
        break;
      case 'Price DESC':
        products.sort((a, b) => b.price - a.price);
        setUpdated(updated + 1);
        break;
      default:
        break;
    }
  };

  const clearSearch = () => {
    history.push(`/?page=${queryPage}&limit=${queryLimit}`);
    setQuerySearch('');
  };

  const getSearch = (value) => {
    if (value === '') {
      history.push(`/?page=${queryPage}&limit=${queryLimit}`);
    } else {
      history.push(`/?page=${queryPage}&limit=${queryLimit}&search=${value}`);
    }
    setQuerySearch(value);
  };

  const getLimit = (value) => {
    if (querySearch === '') {
      history.push(`/?page=${queryPage}&limit=${value}`);
    } else {
      history.push(`/?page=${queryPage}&limit=${value}&search=${querySearch}`);
    }
    setQueryLimit(value);
  };

  const getPage = (value) => {
    if (querySearch === '') {
      history.push(`/?page=${value}&limit=${queryLimit}`);
    } else {
      history.push(`/?page=${value}&limit=${queryLimit}&search=${querySearch}`);
    }
    setQeuryPage(value);
  };

  return (
    <div className='container d-flex flex-column align-items-center'>
      <Header />
      <ProductsNav
        sort={sortBy}
        search={getSearch}
        limit={getLimit}
        clear={clearSearch}
      />
      {products.length ? (
        <>
          <PageSelector pages={pages} page={getPage} />
          <ProductsList products={products} updated={updated} />
        </>
      ) : (
        <div className='row justify-content-center'>
          <CircleLoader />
        </div>
      )}
    </div>
  );
};

export default ProductsMain;
