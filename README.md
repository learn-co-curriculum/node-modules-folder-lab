# Importing Folders (Proxy for Modules)

## Objectives

1. Implement a folder as a proxy for modules
1. Create files in a folder, files with exports
1. Import files/modules from another file via folder "proxy"

## Introduction

Code organization is important. If you want to really master Node and impress you co-workers, you need to know how to import folders. This powerful pattern is sometimes called a proxy for modules. This plugin pattern allows you to write a line of code to import a directory, which also recursively imports everything inside that directory. 

Imagine you're working on a server logger. You must implement a series of modules which display your app logs in different colors. (It can be later used in a CLI game development too!).

## Instructions

1. Create a proxy file `index.js` in the `color-logs` directory.
2. Import all the other JS files in the `color-logs` directory in the `index.js` (except `index.js` obviously)
3. Export the imported file as an object. Follow the  `module.exports = {...}` pattern with filenames as values of properties (see extra info if this is too confusing)
4. Create `main.js` in the root directory of this project and import the `color-logs` folder.
5. Print two lines: "Access granted" in the green color and "Permission denied" in red.
6. Bonus: refactor `index.js` to process an unlimited number of files from the `color-logs` folder with `fs` **without** using any extra npm modules like `require-dir`. You can use `readdirSync()` to read the list of files in the folder. Note: Don't forget to check that the files have `.js` extension and remember to convert any weird names (e.g., `deep-blue.js`) to proper JavaScript/Node names with camelCase (`deepBlue`).

### Extra Info

![](term.png)

This code is **not** the exact code which you need to put in `index.js`. This snippet just an example. Use it as inspiration for the real `index.js` file:

```js
module.exports = {
  banana: require('./banana.js'),
  orange: require('./orange.js'),
  ...
  passionFruit: require('./passion-fruit.js')
}
```

Let's talk about how `green.js`, `red.js` and `yellow.js` work. All three files use special character codes to set the color, and a reset code (always `\x1b[0m'`) to clear the colors. For example, this line puts text parameter `text`, which is `%s` in the first string, between two special codes:

```js
console.log('\x1b[32m%s\x1b[0m', text)
```

You can add more colors using these codes:

```js
Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"
```

* [Printing colorful text in terminal when run node js script](https://coderwall.com/p/yphywg/printing-colorful-text-in-terminal-when-run-node-js-script)
* [How to get colors on the command line](https://docs.nodejitsu.com/articles/command-line/how-to-get-colors-on-the-command-line)
* [node.js require all files in a folder?](http://stackoverflow.com/questions/5364928/node-js-require-all-files-in-a-folder)
* [Converting any string into camel case](http://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case)