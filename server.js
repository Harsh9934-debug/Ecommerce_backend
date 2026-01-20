const express = require("express");
const cors = require("cors");
const Parse = require("parse/node");

const app = express();
const port = 3000;

app.use(cors());

app.get('/',(req,res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
