require("dotenv").config()
const express = require("express");
const app = express();
require("express-async-errors");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");
//middlewares
app.use(express.json());
app.use("/api/v1/products", productsRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI).then(console.log("connected the database"));

        app.listen(port, console.log(`Server is listening ${port}`));
    } catch (error) {
        console.log(error);
    }
}


start();
