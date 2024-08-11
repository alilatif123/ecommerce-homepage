const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const errorMiddleware = require("./middlewares/errorMiddleware");
const productRouter = require("./routes/productRouter");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.use("/api/v1/product", productRouter);

app.use(errorMiddleware);

module.exports = app;
