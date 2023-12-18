const productCardWrapper = document.getElementById("product-card-wrapper");
const backButton = document.getElementById("back-to-main-page-btn");
const deleteButton = document.getElementById("product-delete-btn");
const deleteMessage = document.getElementById("delete-message");

const productId = localStorage.getItem("productId");

const productDetails = async () => {
  const response = await fetch(
    `https://6564822aceac41c0761e51b4.mockapi.io/products/${productId}`
  );
  const product = await response.json();
  return product;
};

const productCard = async () => {
  const product = await productDetails();

  const productCard = document.createElement("div");
  productCard.setAttribute("class", "product-card");

  const productInfoWrapper = document.createElement("div");
  productInfoWrapper.setAttribute("class", "product-info-wrapper");

  const priceWrapper = document.createElement("div");
  priceWrapper.setAttribute("class", "price-wrapper");

  const pricePointer = document.createElement("div");
  pricePointer.setAttribute("class", "price-pointer");

  const name = document.createElement("h2");
  name.textContent = product.name;

  const price = document.createElement("h4");
  price.textContent = "€" + product.priceEur;

  const image = document.createElement("img");
  image.src = product.imageUrl;

  const location = document.createElement("p");
  const boldText = document.createElement("strong");
  boldText.textContent = "Location: ";
  const nonBoldText = document.createTextNode(product.sellingLocation);

  const description = document.createElement("p");
  description.textContent = product.description;

  location.appendChild(boldText);
  location.appendChild(nonBoldText);
  productCard.append(
    productInfoWrapper,
    image,
    location,
    description,
    deleteButton
  );
  productInfoWrapper.append(name, priceWrapper);
  priceWrapper.append(pricePointer, price);
  productCardWrapper.append(productCard);
};

productCard();

backButton.addEventListener("click", () => {
  window.location.href = "./index.html";
});

deleteButton.addEventListener("click", async () => {
  const response = await fetch(
    `https://6564822aceac41c0761e51b4.mockapi.io/products/${productId}`,
    { method: "DELETE" }
  );

  const result = await response.json();

  deleteMessage.textContent = "Product was successfully deleted.";
  //   if (result) {
  //     setTimeout(() => {
  //       window.location.replace("./index.html");
  //     }, 3000);
  //   }
});
