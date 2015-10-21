var github = require('octonode')
var response = require('palmettoflow-event').response
var responseError = require('palmettoflow-event').responseError


module.exports = function (config) {
  return function (ee) {
    ee.on('/github/user/starred', function (event) {
      var client = github.client(event.actor.access_token)
      var ghme = client.me()
      ghme.starred(responseHandler)
    })

    ee.on('/github/repo/readme/get', function (event) {
      var client = github.client(event.actor.access_token)
      var ghrepo = client.repo(event.object.repo)
      ghrepo.readme(responseHandler)

    })

    function responseHandler(err, result) {
        if (err) {
          return ee.emit('send', responseError(event, err))
        }

        ee.emit(send, response(event, result))
      }
    }
  }
}

