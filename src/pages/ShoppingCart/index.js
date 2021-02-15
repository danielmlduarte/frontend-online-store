import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as cartApi from '../../services/cartApi';
import CartItem from '../../components/CartItem';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.handleCartItem = this.handleCartItem.bind(this);
    this.state = {
      cart: [],
      cartTotal: 0,
    };
  }

  componentDidMount() {
    this.updateCart();
  }

  getTotalValue(total, product) {
    return total + product.price * product.cartQuantity;
  }

  handleCartItem(product, buttonId) {
    if (buttonId === 'add') {
      cartApi.addToCart(product);
    }
    if (buttonId === 'sub') {
      cartApi.decreaseToCart(product);
    }
    if (buttonId === 'remove') {
      cartApi.removeFromCart(product);
    }
    this.updateCart();
  }

  updateCart() {
    const initialValue = 0;
    const cart = cartApi.getCartList();
    const cartTotal = cart.reduce(this.getTotalValue, initialValue);
    this.setState({
      cart,
      cartTotal,
    });
  }

  render() {
    const { cart, cartTotal } = this.state;
    return (
      <div>
        <h4 data-testid="shopping-cart-empty-message">
          {!cart.length && <p>Seu carrinho está vazio.</p> }
          {cart.map((cartItem) => (
            <CartItem
              key={ cartItem.id }
              data={ cartItem }
              onChange={ this.handleCartItem }
            />
          ))}
        </h4>
        <footer>
          <h5>
            {`Valor total R$ ${cartTotal}`}
          </h5>
          <div>
            <Link data-testid="checkout-products" to="/checkout">Finalizar a compra</Link>
          </div>
        </footer>
      </div>
    );
  }
}

export default ShoppingCart;
