const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;

app.use("/", express.static(path.join(__dirname, "build")));

app.get("*", function (req, res) {
    res.send("Backend is running");
});

app.listen(port, function () {
    console.log("Server is running");
});