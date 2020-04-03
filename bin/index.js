#!/usr/bin/env node

const { openIncognitoPages } = require('../lib/openIncognitoPages');

const args = process.argv.splice(2);

if (args[0] === '--count') {
  if (args[1]) {
    try {
      const count = parseInt(args[1]);

      if (args[2] === '--executablePath') {
        openIncognitoPages(count, args[3].split(`"`).join(''));
      } else {
        openIncognitoPages(count);
      }
    } catch (err) {
      throw new Error('Number of pages should be an integer');
    }
  } else {
    throw new Error(
      'Please provide number of incoginto pages you want to open after --count flag'
    );
  }
} else {
  openIncognitoPages(1);
}
