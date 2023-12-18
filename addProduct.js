const button = document.getElementById("add-product-button");
const backButton = document.getElementById("back-to-main-page-btn");

const name = document.getElementById("name");
const priceEur = document.getElementById("price-in-eur");
const imageUrl = document.getElementById("image-url");
const description = document.getElementById("description");
const sellingLocation = document.getElementById("selling-location");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");

const addProduct = async () => {
  const product = {
    name: name.value,
    priceEur: priceEur.value,
    imageUrl: imageUrl.value,
    description: description.value,
    sellingLocation: sellingLocation.value,
  };

  try {
    const response = await fetch(
      "https://6564822aceac41c0761e51b4.mockapi.io/products",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
  } catch (err) {
    console.log(err);
  }

  successMessage.textContent = "New product was successfully added.";
  // setTimeout(() => {
  //   window.location.replace("./index.html");
  // }, 3000);
};

backButton.addEventListener("click", () => {
  window.location.href = "./index.html";
});

button.addEventListener("click", () => {
  const requiredInputFields = [
    name,
    priceEur,
    imageUrl,
    description,
    sellingLocation,
  ];

  const fieldIsEmpty = requiredInputFields.some((field) => field.value === "");

  if (fieldIsEmpty) {
    errorMessage.textContent = "Please fill in all required fields!";
  } else {
    addProduct();
  }
});
