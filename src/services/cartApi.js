export function initializeCart() {
  if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
}

export function getCartList() {
  return JSON.parse(localStorage.getItem('cart'));
}

export function addToCart(product) {
  const newProduct = {
    ...product,
    cartQuantity: 1,
  };
  const currentList = JSON.parse(localStorage.getItem('cart'));
  if (currentList.find((item) => item.id === newProduct.id) !== undefined) {
    const newCart = currentList.map((currentItem) => {
      if (currentItem.id === newProduct.id) {
        currentItem.cartQuantity += 1;
      }
      return currentItem;
    });
    localStorage.setItem('cart', JSON.stringify(newCart));
  } else {
    localStorage.setItem('cart', JSON.stringify([...currentList, newProduct]));
  }
}

export function decreaseToCart(product) {
  const currentList = JSON.parse(localStorage.getItem('cart'));
  const newCart = currentList.map((currentItem) => {
    if (currentItem.id === product.id) {
      if (currentItem.cartQuantity > 1) {
        currentItem.cartQuantity -= 1;
      }
    }
    return currentItem;
  });
  localStorage.setItem('cart', JSON.stringify(newCart));
}

/* export function removeFromCart(product) {
  const currentList = JSON.parse(localStorage.getItem('cart'));
  let newList = currentList.map(({ id }) => id !== product.id);
  console.log(newList);
  newList = (newList[0] === false) ? [] : newList;
  localStorage.setItem('cart', JSON.stringify(newList));
} */

export function removeFromCart(product) {
  const currentList = JSON.parse(localStorage.getItem('cart'));
  currentList.splice(currentList.findIndex(({ id }) => id === product.id), 1);
  localStorage.setItem('cart', JSON.stringify(currentList));
}
