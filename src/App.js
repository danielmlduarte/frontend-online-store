import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

import { initializeCart } from './services/cartApi';
import { initializeEvaluations } from './services/evaluationAPI';

function App() {
  initializeCart();
  initializeEvaluations();
  return (
    <BrowserRouter>
      <Route exact path="/" component={ ProductList } />
      <Route path="/cart" component={ ShoppingCart } />
      <Route path="/product/:id/:categoryID/:searchInput" component={ ProductDetails } />
      <Route path="/checkout" component={ Checkout } />
    </BrowserRouter>
  );
}

export default App;
