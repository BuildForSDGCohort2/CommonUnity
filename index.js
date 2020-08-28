const express = require("express");
const app = express();
const path = require("path");

app.use("/", express.static(path.join(__dirname, "build")));

app.get("*", function (req, res) {
    res.send("Backend is running");
});

app.listen(8080, function () {
    console.log("Server is running");
});