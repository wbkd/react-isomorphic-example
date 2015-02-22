# React Isomorphic Starterkit

**work in progress**

**This Isomorphic Starterkit is based on our [React Starterkit](https://github.com/wbkd/react-starterkit/) and enables you to pre-render your react app on server side.**

It provides a prepared development environment for isomorphic apps based on [react](http://facebook.github.io/react/) and [express](http://expressjs.com/). The frontend is built with [gulp](https://github.com/gulpjs/gulp), [stylus](https://github.com/LearnBoost/stylus) and [webpack](https://github.com/webpack/webpack).

## How it works

React gives us the possibility to pre-render an app on the server side, so that the complete markup is served to the client before executing the client scripts which add interactivity to the app.
This concept not only enables better performance, but is useful for SEO because crawlers of search engines have something to look at on request.

In this starterkit, the markup is served using a generic express server in the ```server.js``` file, which is the entry point of the application. Using React, the server renders the ```index.jsx``` file which can be found in the /app folder. This file contains the HTML of the application and includes all components from the application.

As a starting point, the ```app/scripts/app.jsx``` file is rendered into the body of the markup. You can start by adding more components and structuring your app with React as usual.

```app.jsx``` contains a function ```testClientScript()``` which is a test function for the client script to be invoked. It simply alerts a message to test if react has mounted the component on client side, too.

The ```dist``` folder is generated using gulp, webpack and stylus. It contains all stuff that is needed by the frontend (js, css, images, ...). It is served using the static express route ```/public```.

## Get the kit

```
$ git clone https://github.com/wbkd/react-isomorphic-starterkit.git && cd react-isomorphic-starterkit
```

## Installation

Install all dependencies. 

```
$ npm install
```

## Development

```
$ npm start
```

You can check out the isomorphic app at ```http://localhost:1337```.

## Non-Isomorphic Version

This starterkit can be used to develop non-isomorphic apps, too. The starting point is ```app/index.html```. After developing build the app with ```gulp build``` and fire up a webserver in the dist folder.

[React Starterkit](https://github.com/wbkd/react-starterkit/)

## Todos

- [X] basic version
- [ ] add comments
- [ ] refactoring
- [ ] add livereload
- [ ] optimize build task for production