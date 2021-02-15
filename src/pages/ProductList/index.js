import React, { Component } from 'react';

import Card from '../../components/Card';
import CartButton from '../../components/CartButton';
import CategoryList from '../../components/CategoryList';

import { getProductsFromCategoryAndQuery } from '../../services/api';

class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
      searchInput: '',
      categoryID: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSearch() {
    const { searchInput } = this.state;
    getProductsFromCategoryAndQuery('', searchInput)
      .then(({ results }) => this.setState({ results }));
  }

  handleChangeCategory(categoryID) {
    const { searchInput } = this.state;
    getProductsFromCategoryAndQuery(categoryID, searchInput)
      .then(({ results }) => this.setState({ results }));
    this.setState({ categoryID });
  }

  render() {
    const { results, searchInput, categoryID } = this.state;
    return (
      <section>
        <header>
          <input
            type="text"
            name="searchInput"
            value={ searchInput }
            data-testid="query-input"
            onChange={ this.handleInputChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleSearch }
          >
            Pesquisar
          </button>
          <CartButton />
          <h4 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h4>
        </header>
        <main>
          <aside>
            <CategoryList onChange={ this.handleChangeCategory } />
          </aside>
          <section>
            {results.map((result) => (
              <Card
                key={ result.id }
                product={ result }
                categoryID={ categoryID }
                searchInput={ searchInput }
              />
            ))}
            {!results.length && <p>Nenhum produto foi encontrado</p>}
          </section>
        </main>
      </section>
    );
  }
}

export default ProductList;
