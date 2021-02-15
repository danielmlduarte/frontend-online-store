import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from './Cart-Icon.svg';

class CartButton extends Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src={ cartIcon } alt="Shopping cart sprite" width="50px" />
        </Link>
      </div>
    );
  }
}

export default CartButton;
