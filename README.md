# incognitoz

Small CLI tool using [Puppeteer](https://github.com/puppeteer/puppeteer) under the hood to let you open many incognito pages with separate context and cache.

## Installation

`npm install incognitoz -g`

## Usage

### With chromium

Chromium comes as a dependency with the package. Pure chromium does not support as many fancy features as regular browsers do.

`incognitoz --count <number of pages you want to open>`

So if you want to open 5 pages with separate context and cache, then use:

`incognitoz --count 5`

### With your chrome browser

If you need some features that pure chromium does not provide, then you can use chrome executable installed on your desktop desktop with this library.

`incognitoz --count <number of pages you want to open> --executablePath <path to your chrome executable>`

So if you want to open 5 pages with separate context and cache and your chrome executable is located at _C:\Program Files (x86)\Google\Chrome\Application\chrome.exe_, use this command:

`incognitoz --count 5 --executablePath "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"`

### Closing all pages

When you're done you can simply use

`Ctrl+C`

key combination in the console to close the program
