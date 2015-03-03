# React Isomorphic Example

**This is an example for starting off with an isomorphic app. It is based on our [React Starterkit](https://github.com/wbkd/react-starterkit/) and enables pre-rendering react apps on server side.**

It uses [react](http://facebook.github.io/react/) and [express](http://expressjs.com/). The frontend is built using [gulp](https://github.com/gulpjs/gulp), [stylus](https://github.com/LearnBoost/stylus) and [webpack](https://github.com/webpack/webpack).

## How it works

React gives us the possibility to pre-render an app on the server side, so that the complete markup is served to the client before executing the client scripts which add interactivity to the app.
This concept not only enables better performance, but is useful for SEO because crawlers of search engines have something to look at on request.

In this example, the markup is served using a generic express server in the ```server.js``` file, which is the entry point of the application. Using React, the server renders the ```index.jsx``` file which can be found in the /app folder. This file contains the HTML of the application and includes other components of the application.

As a starting point, the ```app/scripts/app.jsx``` file is rendered into the body of the markup. You can start by adding more components and structuring your app with React as usual.

The ```dist``` folder is generated using gulp, webpack and stylus. It contains all stuff that is needed by the frontend (js, css, images, ...). It is served using the static express route ```/public```.

## Key findings

* Server side rendering is done with ```React.renderToStaticMarkup```
* The same code is used on client and server. The JavaScript for the client is built using gulp together with webpack.
* When using express, a static route needs to be used for publishing scripts, styles and other assets. ```app.use(express.static(path.join(__dirname, 'public')));```
* Development: If files change, the server is restarted using nodemon and the assets are built using gulp.

## Clone

```
$ git clone https://github.com/wbkd/react-isomorphic-starterkit.git && cd react-isomorphic-starterkit
```

## Installation

This will install all dependencies needed for running the example.

```
$ npm install
```

## Development

In development mode, this example uses gulp and nodemon to listen for changes made to the JS or CSS files. If there are any changes, the server will automatically restart and the scripts/styles will be built.

```
$ npm run start:dev
```
For further details how this works, you can check out ```gulpfile.js``` and ```package.json```.

The app is now running at ```http://localhost:1337```.

## Production

To build a minified version of the scripts, you can run

```
$ npm run build
```
After that, simply start the server with

```
$ npm start
```

## Related Stuff

You can check out our [React Starterkit](https://github.com/wbkd/react-starterkit/) for developing non-isomorphic apps.
