const puppeteer = require('puppeteer');

exports.openIncognitoPages = async (numberOfPages, executablePath) => {
  let browser;

  if (executablePath)
    browser = await puppeteer.launch({
      headless: false,
      executablePath
    });
  else {
    browser = await puppeteer.launch({
      headless: false
    });
  }

  for (let i = 0; i < numberOfPages - 1; i++) {
    const context = await browser.createIncognitoBrowserContext();
    await context.newPage();
  }
};
