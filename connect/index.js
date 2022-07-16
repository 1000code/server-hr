const mongoose = require("mongoose");
const { DB_USER, DB_PASS, DB_ENDPOINT, DB_NAME } = process.env;

const Conn = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_NAME}.${DB_ENDPOINT}.mongodb.net?retryWrites=true&w=majority`
    );

    console.log("Database is connected");
  } catch (err) {
    console.log("Database connect failed", err);
    process.exit(1);
  }
};

module.exports = Conn;
