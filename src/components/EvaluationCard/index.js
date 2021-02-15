import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EvaluationCard extends Component {
  render() {
    const { data: { email, text, stars } } = this.props;
    return (
      <section>
        <p>{email}</p>
        <p>{text}</p>
        <p>{stars}</p>
      </section>
    );
  }
}

EvaluationCard.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
  }).isRequired,
};

export default EvaluationCard;
