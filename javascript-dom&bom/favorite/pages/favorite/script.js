const productsContainerElement = document.querySelector(".product-container");
const favoriteProducts = getFavoritesFromLocalStorage();

// const filteredProducts = products.filter((product) =>
//   favoriteProducts.includes(product.id)
// );

const filteredProducts = favoriteProducts
  .map((fpId) => products.find((p) => p.id === fpId))
  .reverse();

function fillProducts(products) {
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";

    const productTitleElement = document.createElement("h4");
    productTitleElement.textContent = product.title;
    const productPriceElement = document.createElement("p");
    productPriceElement.textContent = product.price;
    const productDescriptionElement = document.createElement("p");
    productDescriptionElement.textContent = product.description;
    const productFavoriteButton = document.createElement("button");

    productFavoriteButton.innerHTML = `
      <img
        class="heart heart-filled"
        src="../../assets/icons/heart-filled.svg"
        alt="Heart Filled Icon"
      />
    `;
    productFavoriteButton.addEventListener("click", () => {
      removeFromFavoriteLocalStorage(product.id);
      productElement.remove();
    });

    productElement.append(
      productTitleElement,
      productPriceElement,
      productDescriptionElement,
      productFavoriteButton
    );

    productsContainerElement.append(productElement);
  });
}

function removeFromFavoriteLocalStorage(productId) {
  const favorites = getFavoritesFromLocalStorage();
  const filteredFavorites = favorites.filter((id) => id !== productId);
  setFavoritesToLocalStorage(filteredFavorites);
}

function getFavoritesFromLocalStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY)) ?? [];
}

function setFavoritesToLocalStorage(favorites) {
  localStorage.setItem(LOCAL_STORAGE_FAVORITES_KEY, JSON.stringify(favorites));
}

fillProducts(filteredProducts);

// [ {productId: 3, count: 3}, {productId: 5, count: 1},]
