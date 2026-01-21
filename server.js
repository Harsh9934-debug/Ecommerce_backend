const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRouter = require("./routes/userRouters");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello World from the E-commerce");
})

// All the API routes
app.use('/api/user', userRouter);



// Connecting to the mongoDB
connectDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
