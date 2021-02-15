import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../../services/api';

class CategoryList extends Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChangeCategory(categoryID) {
    const { onChange } = this.props;
    onChange(categoryID);
  }

  async fetchCategories() {
    const categoriesFromApi = await api.getCategories();
    this.setState({
      categories: categoriesFromApi,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((item) => (
          <button
            type="button"
            data-testid="category"
            key={ item.id }
            onClick={ () => this.handleChangeCategory(item.id) }
          >
            {item.name}
          </button>
        ))}
      </div>
    );
  }
}

CategoryList.propTypes = { onChange: PropTypes.func.isRequired };

export default CategoryList;
