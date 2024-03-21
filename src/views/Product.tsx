import Loader from './Loader';

import {useProduct} from '../hooks/useProduct';
import DescriptionProduct from '../components/DescriptionProduct';
import WithoutResults from './WithoutResults';
import ActionProduct from '../components/ActionProduct';
import React from 'react';
import SEO from '../SEO';

const Product: React.FC = (): JSX.Element => {
  const [productDetail, isLoading] = useProduct();

  if (isLoading) {
    return <Loader />;
  }

  if (Object.keys(productDetail).length === 0) {
    return <WithoutResults />;
  }

  return (
    <React.Fragment>
      <SEO
        title={'Ingresa lo que quieras encontrar'}
        name={'Mercado Libre'}
        description={'Donde comprar y vender de todo'}
        type={'shopping page'}
      />
      <article className="container_detail">
        <DescriptionProduct productDetail={productDetail} />
        <ActionProduct productDetail={productDetail} />
      </article>
    </React.Fragment>
  );
};

export default Product;
