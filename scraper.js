const puppeteer = require("puppeteer");

async function scrapeAmazonProduct(url) {
  const browser = await puppeteer.launch({ headless: false }); // Set to false to debug
  const page = await browser.newPage();

  // Set User-Agent to avoid detection
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
  );

  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });

  // Wait for the AI Review Summary section (if it exists)
  await page.waitForSelector("#cr-summarization-attributes-list, #cr-summarization-text", { timeout: 10000 }).catch(() => {
    console.log("AI Review Summary not found!");
  });

  // Extracting data
  const productData = await page.evaluate(() => {
    const getText = (selector) => document.querySelector(selector)?.innerText.trim() || "N/A";
    const getImages = (selector) =>
      Array.from(document.querySelectorAll(selector)).map((img) => img.src).filter((src) => !src.includes("video"));

    return {
      productName: getText("#productTitle"),
      rating: getText(".a-icon-alt"),
      numRatings: getText("#acrCustomerReviewText"),
      sellingPrice: getText(".a-price .a-offscreen"),
      totalDiscount: getText(".priceBlockStrikePriceString") || getText(".savingsPercentage"),
      bankOffers: Array.from(document.querySelectorAll(".celwidget .a-text-bold")).map((el) => el.innerText),
      aboutThisItem: Array.from(document.querySelectorAll("#feature-bullets ul li")).map((el) => el.innerText),
      productInformation: Object.fromEntries(
        Array.from(document.querySelectorAll("#productDetails_techSpec_section_1 tr")).map((row) => [
          row.querySelector("th")?.innerText.trim(),
          row.querySelector("td")?.innerText.trim(),
        ])
      ),
      productImages: getImages("#altImages img"),
      manufacturerImages: getImages(".a-spacing-medium img"),
      aiReviewSummary: getText("#cr-summarization-attributes-list") || getText("#cr-summarization-text") || "N/A",
    };
  });

  await browser.close();
  return productData;
}

module.exports = scrapeAmazonProduct;
