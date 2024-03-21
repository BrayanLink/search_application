import React from 'react';
import {INITIAL_MESSAGE} from '../tokens/tokensApp';
import SEO from '../SEO';

const Home = () => {
  return (
    <React.Fragment>
      <SEO
        title={'Ingresa lo que quieras encontrar'}
        description={'Donde comprar y vender de todo'}
        name={'Mercado Libre'}
        type={'shopping page'}
      />
      <section className="home_container">
        <h1>{INITIAL_MESSAGE}</h1>
      </section>
    </React.Fragment>
  );
};

export default Home;
