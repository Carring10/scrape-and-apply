const cheerio = require("cheerio");
const axios = require("axios");

async function wellsFargoScraping() {
    const axiosResponse = await axios.request({
        method: "GET",
        url: "https://www.wellsfargojobs.com/en/jobs/?search=software+engineer+intern&location=CHARLOTTE&pagesize=20#results",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    });

    const $ = cheerio.load(axiosResponse.data);
    const wellsFargo = [];

    $(".card.card-job").each((_, element) => {
        const name = $(element).find("a").first().text().trim();
        const pageUrl = $(element).find("a").attr("href");

        if (name && pageUrl) {
             const filteredRoles = {
                name: name,
                url: "https://www.wellsfargojobs.com" + pageUrl
            }

            wellsFargo.push(filteredRoles);
        }

    });
    
    console.log("Wells Fargo:", wellsFargo)
}

module.exports = { wellsFargoScraping }
