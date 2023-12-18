const cardWrapper = document.getElementById("card-wrapper");

const fetchProducts = async () => {
  const response = await fetch(
    "https://6564822aceac41c0761e51b4.mockapi.io/products"
  );
  const products = await response.json();
  return products;
};

const compileCards = async () => {
  const products = await fetchProducts();

  const sortedProducts = products.sort((a, b) => {
    return a.priceEur - b.priceEur;
  });

  sortedProducts.forEach((product) => {
    const card = document.createElement("a");
    card.href = "./product-details.html";
    card.setAttribute("class", "card");
    card.addEventListener("click", () => {
      localStorage.setItem("productId", product.id);
    });

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

    card.append(productInfoWrapper, image);
    productInfoWrapper.append(name, priceWrapper);
    priceWrapper.append(pricePointer, price);
    cardWrapper.append(card);
  });
};

compileCards();
