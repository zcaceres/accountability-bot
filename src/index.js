const twitter = require('./twitter')
const github = require('./github')

/* global process setInterval */

/*
  Basic Functionality

  1. When timer hits midnight
  2. Hit Github API to fetch commit log of progress log directory
  3. Get last 24 hours of commits
  4. if Sara or Zach's username is not included or date is before yesterday
    Post message to Twitter API based on the username missing

  Logs Repo: https://github.com/zcaceres/progress-logs.git
*/

function timer(duration) {
  setInterval(commitmentCheck, duration)
}
module.exports = timer

const OWNER = 'zcaceres'
const REPO = 'progress-logs'
function commitmentCheck() {
  const githubClient = github.setup()
  github.fetchCommitLog(OWNER, REPO, githubClient, function(err, commits) {
    if (err) return console.error(err)
    const committed = github.getMostRecentCommits(commits.data)
    committed.forEach(username => {
      if (containsUsername(committed, username)) return
      twitter.sendShameMessage(getTwitterClient(username))
    })
  })
}

function getTwitterClient(githubUser) {
  const [zach, sara] = twitter.setup()
  switch (githubUser) {
    case 'zcaceres': {
      return zach
    }
    case 'sisanchez': {
      return sara
    }
    default: {
     console.error('Invalid githubUser', githubUser)
    }
  }
}

function containsUsername(usernameList, username) {
  return usernameList.includes(username)
}
