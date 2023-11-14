// const res = fetch("https://northwind.vercel.app/api/products");

// res
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const productTableBodyElement = document.querySelector("#product-table-body");
const loadingOverlayElement = document.getElementById("loading-overlay");
const BASE_URL = "https://northwind.vercel.app/api";

async function getProductsFromApi() {
  loadingOverlayElement.classList.add("open");
  const response = await fetch(`${BASE_URL}/products`);
  const products = await response.json();
  loadingOverlayElement.classList.remove("open");
  return products;
}

async function fillTable() {
  const products = await getProductsFromApi();
  products.sort((p1, p2) => p1.id - p2.id);
  products.forEach((product) => {
    createAppendProductToTable(product);
  });
}

function createAppendProductToTable(product) {
  const productRowElement = document.createElement("tr");
  const productIdElement = document.createElement("td");
  const productNameElement = document.createElement("td");
  const productSupplierCompanyNameElement = document.createElement("td");
  const productSupplierContactNameElement = document.createElement("td");
  const productCategoryNameElement = document.createElement("td");
  const productOperationsDataElement = document.createElement("td");
  const productDetailLinkElement = document.createElement("a");
  productDetailLinkElement.text = "detail";
  productDetailLinkElement.href = `./detail.html?id=${product.id}`;

  productOperationsDataElement.append(productDetailLinkElement);

  productIdElement.textContent = product.id;
  productNameElement.textContent = product.name;
  productSupplierCompanyNameElement.textContent =
    product.supplier?.companyName ?? "-";
  productSupplierContactNameElement.textContent =
    product.supplier?.contactName ?? "-";
  productCategoryNameElement.textContent = product.category?.name ?? "-";
  productRowElement.append(
    productIdElement,
    productNameElement,
    productSupplierCompanyNameElement,
    productSupplierContactNameElement,
    productCategoryNameElement,
    productOperationsDataElement
  );
  productTableBodyElement.append(productRowElement);
}

fillTable();
