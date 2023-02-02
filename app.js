const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use("/books",router); //localhost:5000/books


mongoose
   .connect("mongodb+srv://admin:1234@bookstore.heicffx.mongodb.net/bookStore?retryWrites=true&w=majority"
)
.then(() => console.log("Connected To Database"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));

//pw - OhLQ5k8WXf0cjcLF