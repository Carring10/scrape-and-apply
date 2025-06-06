const express = require("express");
const allyBank = require("./scrapers/allyBank");

const PORT = process.env.PORT || 3001;
const app = express();

const connection = require('./server/config/connection');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Requests
app.use("/roles", require("./server/routes/roleRoutes"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

allyBank.allyBankScraping();