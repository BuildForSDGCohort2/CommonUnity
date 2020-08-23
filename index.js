const express = require("express");
const app = express();

app.get("*", function (req, res) {
    res.send("Backend is running");
});

app.listen(8080, function () {
    console.log("Server is running");
});