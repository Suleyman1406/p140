const basketItemsContainerElement = document.querySelector(
  ".products-section .content"
);
function fillBasketItems(basketItems) {
  basketItems.forEach((item) => {
    createAppendBasketItem(item);
  });
}

function createAppendBasketItem(item) {
  const basketItemCardElement = document.createElement("div");
  basketItemCardElement.className = "row basket-item-card";
  const basketItemRemoveElement = document.createElement("button");
  basketItemRemoveElement.className = "remove-basket-item-button";
  basketItemRemoveElement.innerHTML = `
    <img src="../../assets/icons/close.svg" alt="Close icon" />
  `;

  basketItemRemoveElement.addEventListener("click", () => {
    if (!confirm("Are you sure?")) return;
    removeBasketItem(item.product);
    basketItemCardElement.remove();
  });
  const productInfoElement = document.createElement("div");
  productInfoElement.className = "product-info";
  productInfoElement.innerHTML = `
    <img
      class="product-img"
      src=${item.product.imgUrl}
      alt="product"
    />
    <h5>${item.product.title}</h5>
  `;
  const productPriceElement = document.createElement("p");
  productPriceElement.className = "product-price";
  productPriceElement.textContent = (
    item.product.newPrice * item.count
  ).toFixed(2);
  const productUnitPriceElement = document.createElement("p");
  productUnitPriceElement.className = "unit-price";
  productUnitPriceElement.textContent = item.product.newPrice;
  const productQuantityOperationsContainerElement =
    document.createElement("div");
  productQuantityOperationsContainerElement.className = "product-quantity";
  const increaseButtonElement = document.createElement("button");
  increaseButtonElement.textContent = "+";
  const decreaseButtonElement = document.createElement("button");
  decreaseButtonElement.textContent = "-";
  decreaseButtonElement.disabled = item.count === 1;
  const qunatitySpanElement = document.createElement("span");
  qunatitySpanElement.textContent = item.count;
  productQuantityOperationsContainerElement.append(
    decreaseButtonElement,
    qunatitySpanElement,
    increaseButtonElement
  );

  increaseButtonElement.addEventListener("click", () => {
    changeBasketItemCount(item.product, 1);
    const newCount = +qunatitySpanElement.textContent + 1;
    qunatitySpanElement.textContent = newCount;
    if (newCount === 2) {
      decreaseButtonElement.disabled = false;
    }
  });
  decreaseButtonElement.addEventListener("click", () => {
    changeBasketItemCount(item.product, -1);
    const newCount = +qunatitySpanElement.textContent - 1;
    qunatitySpanElement.textContent = newCount;
    if (newCount === 1) {
      decreaseButtonElement.disabled = true;
    }
  });

  basketItemCardElement.append(
    basketItemRemoveElement,
    productInfoElement,
    productPriceElement,
    productQuantityOperationsContainerElement,
    productUnitPriceElement
  );
  basketItemsContainerElement.append(basketItemCardElement);
}

function changeBasketItemCount(product, changeCount) {
  const basketItems = getBasketItemsFromLocalStorage();

  const basketItemIdx = basketItems.findIndex(
    (item) => item.product.id === product.id
  );
  if (basketItemIdx === -1) return;

  basketItems[basketItemIdx].count += changeCount;

  setBasketItemsToLocalStorage(basketItems);
}

function removeBasketItem(product) {
  const basketItems = getBasketItemsFromLocalStorage();

  const basketItemIdx = basketItems.findIndex(
    (item) => item.product.id === product.id
  );
  if (basketItemIdx === -1) return;

  basketItems.splice(basketItemIdx, 1);
  setBasketItemsToLocalStorage(basketItems);
}

function getBasketItemsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("basket")) ?? [];
}

function setBasketItemsToLocalStorage(items) {
  localStorage.setItem("basket", JSON.stringify(items));
}

fillBasketItems(getBasketItemsFromLocalStorage());
