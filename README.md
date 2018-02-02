# Unsplash Source Node [![Build Status](https://travis-ci.org/TiagoDanin/Unsplash-Source-Node.png?branch=master)](https://travis-ci.org/TiagoDanin/Unsplash-Source-Node)


[![NPM](https://nodei.co/npm/unsplash-source-node.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/unsplash-source-node./)

Wrapper for the Unsplash Source API

# Use

## Ger redirectURL
Add the param `redirectURL: true`
Note: This function use Promise

```javascript
var unsplash = require('unsplash-source-node')
var url = await unsplash({random: true, redirectURL: true})
//Return string: https://images.unsplash.com/photo-1515349933451-b95498259b01?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=0f1ac7e4ca80001ea0ec1c2ed6ce08db
```

## Basic

- Random all photos

```javascript
var unsplash = require('unsplash-source-node')
var url = unsplash({random: true})
//Return string: https://source.unsplash.com/random/
```

- Random from a specific user

```javascript
var unsplash = require('unsplash-source-node')
var url = unsplash({user: 'tiagodanin'})
//Return string: https://source.unsplash.com/user/tiagodanin/
```

- Random from a user’s likes

```javascript
var unsplash = require('unsplash-source-node')
var url = unsplash({user: 'tiagodanin', likes: true})
//Return string: https://source.unsplash.com/user/tiagoDanin/likes/
```

- Random from a collection

```javascript
var unsplash = require('unsplash-source-node')
var url = unsplash({collection: '190727', likes: true})
//Return string: https://source.unsplash.com/collection/190727/
```

- Fixed daily/weekly photo

```javascript
var unsplash = require('unsplash-source-node')
var urlDaily = unsplash({daily: true})
//Return string: https://source.unsplash.com/daily/
var urlWeekly = unsplash({weekly: true})
//Return string: https://source.unsplash.com/weekly/
```

- Random search term
```javascript
var unsplash = require('unsplash-source-node')
var url = unsplash({search: 'nature,water'})
//Return string: https://source.unsplash.com/?nature,water/
```

## Use with class

```javascript
var unsplash = require('unsplash-source-node')
var myUnsplash = new unsplash({user: 'tiagodanin'})
myUnsplash.likes = true
myUnsplash.width = 1200
myUnsplash.height = 600
var url = myUnsplash.get()
//Return string: https://source.unsplash.com/user/tiagodanin/likes/1200x600/
```


# Installation

This is a [Node.js](https://nodejs.org/) module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) command line tools.

```sh
$ npm install unsplash-source-node
```

# Dependencies

- [request](https://ghub.io/request): Simplified HTTP request client.
- [request-promise-native](https://ghub.io/request-promise-native): The simplified HTTP request client &#39;request&#39; with Promise support. Powered by native ES6 promises.

# License

MIT
