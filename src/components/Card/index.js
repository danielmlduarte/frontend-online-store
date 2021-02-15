import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { addToCart } from '../../services/cartApi';

class Card extends Component {
  render() {
    let { searchInput } = this.props;
    const { categoryID, product } = this.props;
    const {
      title,
      thumbnail,
      price,
      id,
      shipping: { free_shipping: freeShipping },
    } = product;
    searchInput = (searchInput !== '') ? searchInput : false;
    return (
      <article data-testid="product">
        <header>
          <h2>{title}</h2>
        </header>
        <main>
          <img alt="product thumbnail" src={ thumbnail } />
        </main>
        <footer>
          <p>{`R$ ${price}`}</p>
          {freeShipping && <p data-testid="free-shipping">Frete Grátis</p>}
          <Link
            to={ `/product/${id}/${categoryID}/${searchInput}` }
            data-testid="product-detail-link"
          >
            Detalhes do produto
          </Link>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => addToCart(product) }
          >
            Adicionar ao carrinho
          </button>
        </footer>
      </article>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  categoryID: PropTypes.string.isRequired,
  searchInput: PropTypes.string.isRequired,
};

export default Card;
