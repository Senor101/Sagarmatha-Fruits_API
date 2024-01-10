const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
