const productTableBody = document.querySelector(".products-table-body");

async function getProductsFromApi() {
  const response = await fetch(`${BASE_URL}/products`);
  const products = await response.json();

  return products;
}

async function fillTableWithProducts() {
  const products = await getProductsFromApi();
  products.forEach((product) => createProductRow(product));
}

function createProductRow(product) {
  const productRow = document.createElement("tr");
  const productStatusCeil = document.createElement("td");
  const productStatusDivElement = document.createElement("div");
  productStatusDivElement.className = product.inStock
    ? "status inStock"
    : "status";
  productStatusCeil.append(productStatusDivElement);
  const productIdCeil = document.createElement("td");
  productIdCeil.textContent = product.id;
  const productImgCeil = document.createElement("td");
  productImgCeil.innerHTML = `<img src="${product.imageUrl}" alt="">`;
  const productNameCeil = document.createElement("td");
  productNameCeil.textContent = product.name;
  const productPriceCeil = document.createElement("td");
  productPriceCeil.textContent = product.price + "$";
  const productCategoryCeil = document.createElement("td");
  productCategoryCeil.textContent = product.category;
  const productOperationsCeil = document.createElement("td");
  const productDetailBtn = document.createElement("button");
  productDetailBtn.textContent = "detail";
  productOperationsCeil.append(productDetailBtn);

  productDetailBtn.addEventListener("click", () => {
    window.open(`../product-detail/index.html?id=${product.id}`, "_self");
  });

  productRow.append(
    productStatusCeil,
    productIdCeil,
    productImgCeil,
    productNameCeil,
    productPriceCeil,
    productCategoryCeil,
    productOperationsCeil
  );
  productTableBody.append(productRow);
}

fillTableWithProducts();
