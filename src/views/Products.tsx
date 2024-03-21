import React from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {SEARCH_LIMIT_URL, SEARCH_URL} from '../consts/roouting';
import {useFetch} from '../hooks/useFetch';
import {Product} from '../interfaces/product';
import Loader from './Loader';
import WithoutResults from './WithoutResults';
import Breadcrumb from '../components/Breadcrumb';
import ProductItem from '../components/ProductItem';
import SEO from '../SEO';

const Products: React.FC = (): JSX.Element => {
  const [queryParameters] = useSearchParams();
  const searchValue = queryParameters.get('search') || '';

  const url = encodeURI(`${SEARCH_URL}${searchValue}${SEARCH_LIMIT_URL}`);
  const [apiData, isLoading] = useFetch(url);
  const {results: products}: {results: Product[]} = apiData;
  const {filters} = apiData;

  if (isLoading) {
    return <Loader />;
  }

  if (!products || products.length == 0) {
    return <WithoutResults />;
  }

  return (
    <React.Fragment>
      <SEO
        title={'Ingresa lo que quieras encontrar'}
        description={'Donde comprar y vender de todo'}
        name={'Mercado Libre'}
        type={'shopping page'}
      />
      <main className="full_container">
        <div className="products_container">
          {filters.length ? <Breadcrumb filters={filters} /> : null}
          {products.map(product => (
            <Link
              key={product.id}
              to={`/item/${product.id}`}
              style={{textDecoration: 'none'}}
            >
              <ProductItem product={product} key={`${product.id}`} />
            </Link>
          ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Products;
