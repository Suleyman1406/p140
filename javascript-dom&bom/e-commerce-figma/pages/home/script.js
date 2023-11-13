const productWrapperElement = document.querySelector(".products-wrapper");
const basketItemCountBadgeElement = document.querySelector(
  "#pages-header .content .basket-navigation span"
);
function fillProducts(products) {
  products.forEach((product) => {
    createAppendProductCard(product);
  });
}

function createAppendProductCard(product) {
  const productCardElement = document.createElement("div");
  productCardElement.className = "product-card";
  const productImgElement = document.createElement("img");
  productImgElement.src = product.imgUrl;
  productImgElement.className = "product-img";
  productImgElement.alt = "product";
  const productBodyElement = document.createElement("div");
  productBodyElement.className = "product-body";
  const productTitleElement = document.createElement("h3");
  productTitleElement.textContent = product.title;
  const productRatingElement = document.createElement("div");
  productRatingElement.className = "product-rating";
  productRatingElement.innerHTML = createProductRating(product.rating);
  const productPricingElement = document.createElement("div");
  productPricingElement.className = "product-pricing";
  productPricingElement.innerHTML = `
    <p class="active-price">$${product.newPrice}</p>
    <p class="old-price">$${product.oldPrice}</p>
    <p class="discount">${product.discount}% Off</p>
  `;
  const productOverlayElement = document.createElement("div");
  productOverlayElement.className = "overlay";
  const productCartImgElement = document.createElement("img");
  productCartImgElement.src = "../../assets/icons/cart.svg";
  productCartImgElement.alt = "Cart icon";
  productOverlayElement.append(productCartImgElement);

  productCartImgElement.addEventListener("click", () => {
    addProductToBasket(product);
  });

  productBodyElement.append(
    productTitleElement,
    productRatingElement,
    productPricingElement
  );

  productCardElement.append(
    productImgElement,
    productBodyElement,
    productOverlayElement
  );

  productWrapperElement.append(productCardElement);
}

function createProductRating(count) {
  return `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="124"
    height="16"
    viewBox="0 0 124 16"
    fill="none"
  >
    <path
      d="M13.8922 6.33728L9.64072 9.85925L10.8915 15.5833L6.76051 12.1252L2.36348 15.3993L4.06228 9.73926L0.0961914 6.03931L5.27665 5.99927L7.22331 0.438354L8.7265 6.07434L13.8922 6.33728Z"
      fill="${count > 0 ? "#FFC600" : "#C1C8CE"}"
    />
    <path
      d="M41.3409 6.33728L37.0894 9.85925L38.3402 15.5833L34.2092 12.1252L29.8122 15.3993L31.511 9.73926L27.5449 6.03931L32.7254 5.99927L34.672 0.438354L36.1752 6.07434L41.3409 6.33728Z"
      fill="${count > 1 ? "#FFC600" : "#C1C8CE"}"
    />
    <path
      d="M68.7921 6.33728L64.5406 9.85925L65.7914 15.5833L61.6604 12.1252L57.2634 15.3993L58.9622 9.73926L54.9961 6.03931L60.1766 5.99927L62.1232 0.438354L63.6264 6.07434L68.7921 6.33728Z"
      fill="${count > 2 ? "#FFC600" : "#C1C8CE"}"
    />
    <path
      d="M96.2418 6.33728L91.9904 9.85925L93.2411 15.5833L89.1102 12.1252L84.7131 15.3993L86.4119 9.73926L82.4458 6.03931L87.6263 5.99927L89.5729 0.438354L91.0761 6.07434L96.2418 6.33728Z"
      fill="${count > 3 ? "#FFC600" : "#C1C8CE"}"
    />
    <path
      d="M123.692 6.33728L119.441 9.85925L120.692 15.5833L116.561 12.1252L112.164 15.3993L113.863 9.73926L109.896 6.03931L115.077 5.99927L117.024 0.438354L118.527 6.07434L123.692 6.33728Z"
      fill="${count > 4 ? "#FFC600" : "#C1C8CE"}"
    />
  </svg>
  `;
}

function addProductToBasket(product) {
  const basketItems = getBasketItemsFromLocalStorage();

  const basketItemIdx = basketItems.findIndex(
    (item) => item.product.id === product.id
  );

  if (basketItemIdx === -1) {
    basketItems.push({
      count: 1,
      product: product,
    });
  } else {
    basketItems[basketItemIdx].count++;
  }

  setBasketItemsToLocalStorage(basketItems);
  updateBasketItemCountBadge();
}

function getBasketItemsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("basket")) ?? [];
}

function setBasketItemsToLocalStorage(items) {
  localStorage.setItem("basket", JSON.stringify(items));
}

function updateBasketItemCountBadge() {
  const basketItems = getBasketItemsFromLocalStorage();
  const basketItemsUnitCount = basketItems.reduce(
    (prev, value) => prev + value.count,
    0
  );

  basketItemCountBadgeElement.textContent = basketItemsUnitCount;
}

updateBasketItemCountBadge();

fillProducts(products);
