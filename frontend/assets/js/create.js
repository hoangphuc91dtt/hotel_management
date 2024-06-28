document
  .getElementById("create-hotel-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("hotel-name").value;
    const price = document.getElementById("hotel-price").value;

    fetch("http://localhost:3000/hotels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, price })
    }).then(() => {
      window.location.href = "index.html";
    });
  });
