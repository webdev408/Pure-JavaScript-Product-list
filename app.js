import productsData from "./data.js";
let products = [...productsData];

const wrapperEl = document.getElementById("app");
const addProductBtn = document.querySelector(".btn-primary");

function deleteProduct(id) {
  const updatedProducts = products.filter((product) => product.id !== id);
  products = updatedProducts;
  renderProducts();
}
window.deleteProduct = deleteProduct;
function renderProducts() {
  wrapperEl.innerHTML = products
    .map((product) => {
      return ` <div class=" card w-100" >
      <div class="card-body text-center d-flex justify-content-between align-items-center ">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">$${product.price}</p>
        <img class="w-25" src="${product.image}" class="card-img-top" alt="${product.name}">
       
        <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
      </div>
    </div>`;
    })
    .join(" ");
}

addProductBtn.addEventListener("click", () => {
  const newProduct = {
    id: 5,
    name: "Lemon",
    price: 0.99,
    image:
      "https://th.bing.com/th/id/OIP.eWzl7IdR3xbyQwXbHg7vrQHaFr?pid=ImgDetMain",
  };
  products.push(newProduct);
  renderProducts();
});

renderProducts();
