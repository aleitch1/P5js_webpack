# P5Js Webpack Boilerplate

This emerged out of a procedural generation project about towers and fire escapes, built for ITPCamp 2019.

It was developed to provide a React-like build environment for P5.js canvas drawing projects, allowing for a little better debug and tweaking. It assumes use of `import` statements and code separation and an interest in functional programming. 

When you boot the code, you will get a new tenement apartment with slightly different fire escapes every 1000ms or so. 

## Getting Started

### Boot Up
* `npm install`
* `npm audit fix --force`
* `npm run build` - this should generate a `/dist` folder
* Place the index.html file in `/dist` 
* `npm start`


This will start a webpack development server on port 8080, and run whatever sample code you have in the server in a new browser window. 

The development server has hot reloading, but it is slow.

### Production Build
* npm run build

This will output a ./dist folder containing your webpack bundle and whatever edits you've made to the index.html file you target in your scripts.

### Common Problems

1. Webpack won't turn on dev server
    * Have you checked that `static` is not currently `contentBase` in webpack.config.js

2. 'node_modules' is not recognized as an internal or external command
    * Windows problem!
    * Windows wants JUST the webpack command, Mac wants the location of the local webpack build
    * "start": "node_modules/.bin/webpack serve --open", -> Mac
    * "start": "webpack serve --open", -> PC
