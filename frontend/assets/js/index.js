fetch("http://localhost:3000/hotels")
  .then((response) => response.json())
  .then((data) => {
    const hotelTableBody = document.getElementById("hotel-table-body");
    console.log(data);
    data.forEach((hotel) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                  <td>${hotel.name}</td>
                  <td>${hotel.price}</td>
                  <td>
                      <button onclick="editHotel(${hotel.id})">Edit</button>
                      <button onclick="removeHotel(${hotel.id})">Remove</button>
                  </td>
              `;
      hotelTableBody.appendChild(row);
    });
  });

function editHotel(id) {
  window.location.href = `edit.html?id=${id}`;
}

function removeHotel(id) {
  if (confirm("Are you sure you want to remove this hotel?")) {
    fetch(`http://localhost:3000/hotels/${id}`, {
      method: "DELETE"
    });
    location.reload();
  }
}
