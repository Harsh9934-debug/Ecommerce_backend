const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get('/',(req,res) => {
    res.send("Hello World from the E-commerce");
})

connectDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
