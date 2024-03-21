import React from 'react';
import SearchBar from './components/SearchBar';
import {Route, Routes} from 'react-router-dom';
import NotFound from './views/NotFound';

import './styles/index.scss';
import Loader from './views/Loader';
import ErrorBoundary from './ErrorBoundary';

const Home = React.lazy(() => import('./views/Home'));
const Product = React.lazy(() => import('./views/Product'));
const Products = React.lazy(() => import('./views/Products'));

function App() {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <SearchBar />
        <React.Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Products />} />
            <Route path="/item/:id" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
