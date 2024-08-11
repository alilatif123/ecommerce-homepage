const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./index");
dotenv.config({
  path: "./config.env",
});
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB");
  });
