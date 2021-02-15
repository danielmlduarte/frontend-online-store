import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EvaluationCard from '../EvaluationCard';

import { getEvaluations } from '../../services/evaluationAPI';

class EvaluationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evaluations: [],
    };

    this.fetchEvaluations = this.fetchEvaluations.bind(this);
  }

  componentDidMount() {
    this.fetchEvaluations();
    const timeBetweenNewRequest = 1000;
    setInterval(() => this.fetchEvaluations(), timeBetweenNewRequest);
  }

  fetchEvaluations() {
    const { productID: id } = this.props;
    const totalAvaluations = getEvaluations();
    const product = totalAvaluations.find(({ productID }) => productID === id);
    if (product) {
      this.setState({ evaluations: product.evaluations });
    }
  }

  render() {
    const { evaluations } = this.state;
    return (
      <section>
        {evaluations.map((avaluationCard) => (
          <EvaluationCard key={ avaluationCard.id } data={ avaluationCard } />
        ))}
      </section>
    );
  }
}

EvaluationList.propTypes = {
  productID: PropTypes.string.isRequired,
};

export default EvaluationList;
