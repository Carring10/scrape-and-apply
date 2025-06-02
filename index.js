const wellsFargo = require("./scrapers/wellsFargo");
const allyBank = require("./scrapers/allyBank");
const truist = require("./scrapers/truist");

wellsFargo.wellsFargoScraping();
allyBank.allyBankScraping();
truist.truistScraping();