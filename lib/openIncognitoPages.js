const puppeteer = require('puppeteer');

exports.openIncognitoPages = async (numberOfPages, executablePath) => {
  for (let i = 0; i < numberOfPages; i++) {
    if (executablePath) {
      await puppeteer.launch({
        headless: false,
        executablePath,
      });
    } else {
      await puppeteer.launch({
        headless: false,
      });
    }
  }
};
