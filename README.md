# Palmetto Flow Github Service

This service using the octonode api to create a palmetto flow service for the github api.

## usage

`npm i palmettoflow-github-svc`

// get starred repos for a user

``` js
var newEvent = require('palmettoflow-event').newEvent
var ne = newEvent('github/user/starred', 'get', {}, {
  access_token: '....'
})

ee.once(ne.from, function (repos) {
  console.log(repos)
})

ee.emit('send', ne)
```

// get readme for repo

``` js
var newEvent = require('palmettoflow-event').newEvent
var ne = newEvent('github/user/starred', 'get', {}, {
  access_token: '....'
})

ee.once(ne.from, function (repos) {
  console.log(repos)
})

ee.emit('send', ne)
```