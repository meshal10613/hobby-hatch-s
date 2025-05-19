require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
const port = process.env.port || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running......");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port} ${process.env.DB_USER} ${process.env.DB_PASS}`);
});