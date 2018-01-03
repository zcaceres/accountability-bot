const twitter = require('./twitter')
const github = require('./github')

/* global process setInterval */

// Twitter API (access to Sara and Zach's twitter via api key)
// GitHub api
// Git repo for progress logs (submitting markdown documents each 24 period)
// Chron job: checking every 24 hours

/*
  Basic Functionality

  1. When timer hits midnight
  2. Hit Github API to fetch commit log of progress log directory
  3. Get two most recent commits
  4. Parse for date of commits
  5. Parse USERNAMES of commits
  6. if date === yesterday, and usernames are Sara and Zach's
    Do nothing!
  7. if Sara or Zach's username is not included or date is before yesterday
    Post message to Twitter API based on the username missing

  Logs Repo: https://github.com/zcaceres/progress-logs.git
  Sara Twitter: @sarasanchezgt
  Zach Twitter: @zachcaceres
  Sara Github: @sisanchez
  Zach Github: @zcaceres
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


// const USERNAMES = ['zcaceres', 'sisanchez']
function containsUsername(usernameList, username) {
  return usernameList.includes(username)
}
