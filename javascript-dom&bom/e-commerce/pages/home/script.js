const productContainer = document.querySelector(".product-container");

function fillWithProducts(products) {
  products.forEach((product) => {
    const productWrapperElement = document.createElement("div");
    productWrapperElement.className = "product";
    const productTitleElement = document.createElement("h3");
    productTitleElement.textContent = product.title;
    const productPriceElement = document.createElement("p");
    productPriceElement.textContent = product.price;
    const productDescriptionElement = document.createElement("p");
    productDescriptionElement.textContent = product.description;

    productWrapperElement.append(
      productTitleElement,
      productPriceElement,
      productDescriptionElement
    );

    productWrapperElement.addEventListener("click", () => {
      window.open(
        `${window.location.origin}/javascript-dom&bom/e-commerce/pages/product-detail/index.html?id=${product.id}`,
        "_self"
      );
    });

    productContainer.append(productWrapperElement);
  });
}

fillWithProducts(products);
