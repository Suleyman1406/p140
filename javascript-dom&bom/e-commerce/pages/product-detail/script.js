const searchParam = new URLSearchParams(window.location.search);
const searchProductId = searchParam.get("id");

const product = products.find((product) => product.id == searchProductId);

if (!product) {
  window.open(
    `${location.origin}/javascript-dom&bom/e-commerce/pages/not-found/index.html`,
    "_self"
  );
}

document.querySelector("h3").textContent = product.title;
document.querySelector("span").textContent = product.price;
document.querySelector("p").textContent = product.description;
