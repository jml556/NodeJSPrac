const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const notFoundRoutes = require("./routes/not-found.js");
const path = require("path");

const app = express();

app.get("/favicon.ico", (req, res) => res.status(204));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(notFoundRoutes);

app.listen(3000);
