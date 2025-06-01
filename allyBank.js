const cheerio = require("cheerio");
const axios = require("axios");

async function allyBankScraping() {
    const axiosResponse = await axios.request({
        method: "GET",
        url: "https://ally.avature.net/careers/SearchJobs/software%20engineer?667=%5B265477%5D&667_format=613&listFilterMode=1&jobRecordsPerPage=6&",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    });

    const $ = cheerio.load(axiosResponse.data);
    const allyBank = [];

    $(".article.article--result").each((_, element) => {
        const name = $(element).find("a").first().text().trim();
        const pageUrl = $(element).find("a").attr("href");

        const info = $(element).find("span").text().trim();
        // map through the string & remove any whitespaces, then filter & keep only items that are not empty (aka truthy)
        const removeLines = info.split('\n').map(line => line.trim()).filter(line => line);
        const [city, state, country, refLine, postedLine] = removeLines;

        const location = `${city}, ${state}`;
        const date = `${postedLine}`;


        if (name && pageUrl && info) {
            if (location === "Charlotte, NC") {
                const filteredRoles = {
                    name: name,
                    url: pageUrl,
                    info: {
                        location: location,
                        date: date
                    }
                };
                allyBank.push(filteredRoles);
            }

        };
    });

    console.log("Ally Bank", allyBank);
}

allyBankScraping();

module.exports = { allyBankScraping }
