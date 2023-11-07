const productsContainerElement = document.querySelector(".product-container");
const favoritesItemCountElement = document.querySelector(
  ".navbar .favorites-item-count"
);
const favoriteProducts = getFavoritesFromLocalStorage();

function fillProducts(products) {
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = favoriteProducts.includes(product.id)
      ? "product favorite"
      : "product";

    const productTitleElement = document.createElement("h4");
    productTitleElement.textContent = product.title;
    const productPriceElement = document.createElement("p");
    productPriceElement.textContent = product.price;
    const productDescriptionElement = document.createElement("p");
    productDescriptionElement.textContent = product.description;
    const productFavoriteButton = document.createElement("button");

    productFavoriteButton.innerHTML = `
      <img
        class="heart"
        src="../../assets/icons/heart.svg"
        alt="Heart Icon"
      />
      <img
        class="heart heart-filled"
        src="../../assets/icons/heart-filled.svg"
        alt="Heart Filled Icon"
      />
    `;

    productFavoriteButton.addEventListener("click", () => {
      // if (productElement.classList.contains("favorite")) {
      //   removeFromFavoriteLocalStorage(product.id);
      // } else {
      //   addToFavoriteLocalStorage(product.id);
      // }
      // productElement.classList.toggle("favorite");
      toggleFavoriteElemet(product.id, productElement);
      updateFavoritesItemCountElement();
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

function toggleFavoriteElemet(productId, productElement) {
  const favorites = getFavoritesFromLocalStorage();

  const favoriteIdx = favorites.findIndex((id) => id === productId);
  if (favoriteIdx === -1) {
    favorites.push(productId);
    productElement.className = "product favorite";
  } else {
    favorites.splice(favoriteIdx, 1);
    productElement.className = "product";
  }

  setFavoritesToLocalStorage(favorites);
}

// function addToFavoriteLocalStorage(productId) {
//   const favorites = getFavoritesFromLocalStorage();
//   favorites.push(productId);
//   setFavoritesToLocalStorage(favorites);
// }

// function removeFromFavoriteLocalStorage(productId) {
//   const favorites = getFavoritesFromLocalStorage();
//   const filteredFavorites = favorites.filter((id) => id !== productId);
//   setFavoritesToLocalStorage(filteredFavorites);
// }

function getFavoritesFromLocalStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY)) ?? [];
}

function setFavoritesToLocalStorage(favorites) {
  localStorage.setItem(LOCAL_STORAGE_FAVORITES_KEY, JSON.stringify(favorites));
}

fillProducts(products);

function updateFavoritesItemCountElement() {
  if (getFavoritesFromLocalStorage().length) {
    favoritesItemCountElement.style.display = "grid";
    favoritesItemCountElement.textContent =
      getFavoritesFromLocalStorage().length;
  } else {
    favoritesItemCountElement.style.display = "none";
  }
}

updateFavoritesItemCountElement();
