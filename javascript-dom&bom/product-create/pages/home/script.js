const productCreateFormElement = document.querySelector(".product-create-form");
const productTitleInputContainerElement = productCreateFormElement.children[1];
const productPriceInputContainerElement = productCreateFormElement.children[2];
const productDescriptionInputContainerElement =
  productCreateFormElement.children[3];
const productsContainerElement = document.querySelector(".product-container");

productCreateFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateFormItems()) return;
  const newProduct = {
    title: productTitleInputContainerElement.firstElementChild.value,
    price: productPriceInputContainerElement.firstElementChild.value,
    description:
      productDescriptionInputContainerElement.firstElementChild.value,
  };
  createAndAppendProductElement(newProduct);
  resetFormInputs();
});

function validateFormItems() {
  let isSucces = true;
  if (!productTitleInputContainerElement.firstElementChild.value.trim()) {
    productTitleInputContainerElement.lastElementChild.textContent =
      "Title is required";
    isSucces = false;
  }
  if (!productPriceInputContainerElement.firstElementChild.value.trim()) {
    productPriceInputContainerElement.lastElementChild.textContent =
      "Price is required";
    isSucces = false;
  }
  if (!productDescriptionInputContainerElement.firstElementChild.value.trim()) {
    productDescriptionInputContainerElement.lastElementChild.textContent =
      "Description is required";
    isSucces = false;
  }
  return isSucces;
}

function addErrorCleanListenerOnInputKeyDown() {
  [
    productTitleInputContainerElement.firstElementChild,
    productPriceInputContainerElement.firstElementChild,
    productDescriptionInputContainerElement.firstElementChild,
  ].forEach((element) => {
    element.addEventListener("keydown", () => {
      element.nextElementSibling.textContent = "";
    });
  });
}

addErrorCleanListenerOnInputKeyDown();

function createAndAppendProductElement(product) {
  const productWrapperElement = document.createElement("div");
  productWrapperElement.className = "product";
  const productTitleElement = document.createElement("h3");
  productTitleElement.textContent = product.title;
  const productPriceElement = document.createElement("p");
  productPriceElement.textContent = product.price;
  const productDescriptionElement = document.createElement("p");
  productDescriptionElement.textContent = product.description;
  const productDeleteBtnElement = document.createElement("button");
  productDeleteBtnElement.textContent = "Delete";
  productDeleteBtnElement.addEventListener("click", onProductDelete);

  productWrapperElement.append(
    productTitleElement,
    productPriceElement,
    productDescriptionElement,
    productDeleteBtnElement
  );
  productsContainerElement.append(productWrapperElement);
}

function onProductDelete(e) {
  if (confirm("Are you sure to delete product?"))
    e.target.parentElement.remove();
}

function resetFormInputs() {
  productTitleInputContainerElement.firstElementChild.value = "";
  productPriceInputContainerElement.firstElementChild.value = "";
  productDescriptionInputContainerElement.firstElementChild.value = "";
}
