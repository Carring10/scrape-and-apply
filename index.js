const cheerio = require("cheerio");
const axios = require("axios");

async function performScraping() {
    const axiosResponse = await axios.request({
        method: "GET",
        url: "https://",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })
}

// parsing the HTML source of the target web page with Cheerio
const $ = cheerio.load(axiosResponse.data);

// initializing the data structures that will contain the scraped data
const internships = [];
const juniorRoles = [];

performScraping();