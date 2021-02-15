export function initializeEvaluations() {
  if (localStorage.getItem('evaluations') === null) {
    localStorage.setItem('evaluations', JSON.stringify([]));
  }
}

export function getEvaluations() {
  return JSON.parse(localStorage.getItem('evaluations'));
}

export function addEvaluation(evaluation, productID) {
  const evaluationsList = getEvaluations();
  if (evaluationsList.find(({ productID: id }) => id === productID)) {
    const newEvaluationsList = evaluationsList.map((product) => {
      const { productID: id } = product;
      if (id === productID) {
        const newEvaluation = {
          ...evaluation,
          id: product.evaluations[product.evaluations.length - 1].id + 1,
        };
        product.evaluations.push(newEvaluation);
      }
      return product;
    });
    localStorage.setItem('evaluations', JSON.stringify(newEvaluationsList));
  } else {
    const newEvaluation = {
      productID,
      evaluations: [{
        ...evaluation,
        id: 1,
      }],
    };
    const newEvaluationsList = [...evaluationsList, newEvaluation];
    localStorage.setItem('evaluations', JSON.stringify(newEvaluationsList));
  }
}
