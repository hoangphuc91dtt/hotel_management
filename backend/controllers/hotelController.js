// controllers/hotelController.js
const sql = require("mssql");

const getHotels = async (req, res) => {
  try {
    const query = "SELECT id, name, price FROM hotel";
    const result = await sql.query(query);
    res.json(result.recordset);
  } catch (err) {
    console.error("Error querying database", err);
    res.status(500).send("Error querying database");
  }
};

const getHotelById = async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
    const query = `SELECT * FROM hotel WHERE ID = ${hotelId}`;
    const result = await sql.query(query);
    res.json(result.recordset[0]);
  } catch (err) {
    console.error("Error querying database", err);
    res.status(500).send("Error querying database");
  }
};

const createHotel = async (req, res) => {
  const { name, price } = req.body;
  try {
    const query = `INSERT INTO hotel (name, price) VALUES ('${name}', '${price}')`;
    await sql.query(query);
    res.send("New hotel created");
  } catch (err) {
    console.error("Error creating new hotel", err);
    res.status(500).send("Error creating new hotel");
  }
};

const deleteHotel = async (req, res) => {
  const hotelId = req.params.hotelId;
  try {
    const query = `DELETE FROM hotel WHERE id = ${hotelId}`;
    await sql.query(query);
    res.send(`Deleted hotel with ID ${hotelId}`);
  } catch (err) {
    console.error("Error deleting hotel", err);
    res.status(500).send(`Error deleting hotel with ID ${hotelId}`);
  }
};

const updateHotel = async (req, res) => {
  const hotelId = req.params.hotelId;
  const { name, price } = req.body;

  try {
    let updateFields = [];
    if (name) updateFields.push(`name = '${name}'`);
    if (price) updateFields.push(`price = ${price}`);

    const updateQuery = `UPDATE hotel SET ${updateFields.join(
      ", "
    )} WHERE id = ${hotelId}`;
    await sql.query(updateQuery);

    res.send(`Updated hotel with ID ${hotelId}`);
  } catch (err) {
    console.error("Error updating hotel", err);
    res.status(500).send(`Error updating hotel with ID ${hotelId}`);
  }
};

module.exports = {
  getHotels,
  getHotelById,
  createHotel,
  deleteHotel,
  updateHotel
};
