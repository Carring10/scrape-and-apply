const puppeteer = require("puppeteer");

const truistScraping = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://careers.truist.com/us/en/search-results?keywords=software%20engineer%20intern&from=20&s=1", { waitUntil: "networkidle2" });

  await page.waitForSelector(".jobs-list-item");

  const jobLinks = await page.$$eval(".jobs-list-item a", anchors =>
    anchors.map(a => a.href)
  );

  console.log("Job URLs:", jobLinks);

  await browser.close();
};

truistScraping();
