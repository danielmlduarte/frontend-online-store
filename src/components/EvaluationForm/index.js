import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addEvaluation } from '../../services/evaluationAPI';

class EvaluationForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      text: '',
      stars: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { productID } = this.props;
    addEvaluation(this.state, productID);
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, text, stars } = this.state;
    return (
      <section>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              name="email"
              required
              value={ email }
              onChange={ (e) => this.handleInputChange(e) }
            />
          </label>
          <label htmlFor="text">
            Mensagem:
            <textarea
              type="text"
              id="text"
              name="text"
              data-testid="product-detail-evaluation"
              value={ text }
              onChange={ (e) => this.handleInputChange(e) }
            />
          </label>
          <label htmlFor="stars">
            Avaliação:
            <input
              type="range"
              min={ 0 }
              max={ 5 }
              step={ 1 }
              value={ stars }
              name="stars"
              required
              onChange={ (e) => this.handleInputChange(e) }
            />
          </label>
          <button type="submit">Avaliar</button>
        </form>
      </section>
    );
  }
}

EvaluationForm.propTypes = {
  productID: PropTypes.string.isRequired,
};

export default EvaluationForm;
