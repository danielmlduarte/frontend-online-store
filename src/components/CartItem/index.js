import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  handleCartItem(product, buttonId) {
    const { onChange } = this.props;
    onChange(product, buttonId);
  }

  render() {
    const { data } = this.props;
    const {
      title,
      thumbnail,
      price,
      cartQuantity,
      available_quantity: availableQuantity,
    } = data;
    const avaliable = !((availableQuantity > cartQuantity));
    return (
      <article>
        <header>
          <h2 data-testid="shopping-cart-product-name">{title}</h2>
        </header>
        <main>
          <img alt="product thumbnail" src={ thumbnail } />
        </main>
        <footer>
          <p>{`R$ ${price}`}</p>
          <p data-testid="shopping-cart-product-quantity">{ cartQuantity }</p>
        </footer>
        <button
          type="button"
          disabled={ avaliable }
          data-testid="product-increase-quantity"
          onClick={ () => this.handleCartItem(data, 'add') }
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => this.handleCartItem(data, 'sub') }
        >
          -
        </button>
        <button
          type="button"
          onClick={ () => this.handleCartItem(data, 'remove') }
        >
          X
        </button>
      </article>
    );
  }
}

CartItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    cartQuantity: PropTypes.number.isRequired,
    available_quantity: PropTypes.number.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CartItem;
