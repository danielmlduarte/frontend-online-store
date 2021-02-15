import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import CartButton from '../../components/CartButton';

import EvaluationList from '../../components/EvaluationList';
import EvaluationForm from '../../components/EvaluationForm';
import { addToCart } from '../../services/cartApi';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: {
        title: '',
        price: 0,
        thumbnail: '',
        availableQuantity: 0,
        shipping: { freeShipping: false },
      },
    };

    this.handleState = this.handleState.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id, categoryID, searchInput } } } = this.props;
    const query = (searchInput === 'false') ? undefined : searchInput;
    const { results } = await getProductsFromCategoryAndQuery(categoryID, query);
    const product = results.find(({ id: productID }) => productID === id);
    this.handleState(product);
  }

  handleState(product) {
    this.setState({ product });
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const { product } = this.state;
    const {
      title,
      price,
      thumbnail,
      available_quantity: availableQuantity,
      shipping: { free_shipping: freeShipping },
    } = product;

    return (
      <section>
        <section>
          <header>
            <h2 data-testid="product-detail-name">{title}</h2>
            <aside>
              <img alt="product thumbnail" src={ thumbnail } />
            </aside>
            <main>
              <div>
                {availableQuantity}
              </div>
            </main>
          </header>
          <div>{`R$ ${price}`}</div>
          {freeShipping && <p data-testid="free-shipping">Frete Grátis</p>}
          <CartButton />
          <button
            type="button"
            onClick={ () => addToCart(product) }
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </section>
        <EvaluationList productID={ id } />
        <EvaluationForm productID={ id } />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      categoryID: PropTypes.string.isRequired,
      searchInput: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
