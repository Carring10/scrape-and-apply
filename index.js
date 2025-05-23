const cheerio = require("cheerio");
const axios = require("axios");

async function performScraping() {
    const axiosResponse = await axios.request({
        method: "GET",
        url: "https://ally.avature.net/careers/SearchJobs/software%20engineer?667=%5B265477%5D&667_format=613&listFilterMode=1&jobRecordsPerPage=6&",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    });

    const $ = cheerio.load(axiosResponse.data);
    const filteredRoles = [];

    $(".article.article--result").each((_, element) => {
        const name = $(element).find("a").first().text().trim();
        const pageUrl = $(element).find("a").attr("href");

        console.log("Role: ", name, "Listing:", pageUrl);

        if (name && pageUrl) {

            const allyBank = {
                name: name,
                url: pageUrl
            }

            filteredRoles.push(allyBank);
        }
    });
    console.log(filteredRoles);
}

const juniorRoles = [];

performScraping();