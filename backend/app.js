// server.js
const express = require("express");
const cors = require("cors");
const { connectSQL } = require("./config/dbConfig");
const hotelRoutes = require("./routes/hotelRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

app.use("/hotels", hotelRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectSQL();
});
