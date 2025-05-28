const puppeteer = require("puppeteer");

const truistScraping = async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto("https://careers.truist.com/us/en/search-results?keywords=software%20engineer&p=65a8e27d8879283831b664bd8b7f0ad4&location=Charlotte,%20North%20Carolina,%20United%20States", { waitUntil: "networkidle2" });

    await page.waitForSelector(".jobs-list-item");

    const truist = [];

    const jobLinks = await page.$$eval(".jobs-list-item a", anchors =>
        anchors.map(a => ({
            name: a.textContent.trim(),
            url: a.href
        }))
    );

    truist.push(jobLinks);
    console.log(truist);

    await browser.close();
};

truistScraping();
