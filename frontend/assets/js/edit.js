const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const nameInput = document.getElementById("edit-hotel-name");
const priceInput = document.getElementById("edit-hotel-price");

const btnEdit = document.getElementById("edit-hotel-form");
fetch(`http://localhost:3000/hotels/${id}`)
  .then((response) => response.json())
  .then((hotel) => {
    nameInput.value = hotel.name;
    priceInput.value = hotel.price;
  });

btnEdit.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch(`http://localhost:3000/hotels/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: nameInput.value, price: priceInput.value })
  }).then(() => {
    window.location.href = "index.html";
  });
});
