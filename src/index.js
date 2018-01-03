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
  const [zach, sara] = twitter.setup()
  const githubClient = github.setup()
  github.fetchCommitLog('zcaceres', 'progress-logs', githubClient, function(err, commits) {
    if (err) console.error(err)
    console.log('COMMITS', commits)
  })
  // TODO: REMOVE ME
  // twitter.sendShameMessage()
  // setInterval(commitmentCheck, duration)
}
module.exports = timer

function commitmentCheck() {
  const log = fetchCommitLog()
  const commits = getMostRecentCommits(log)
  const dates = parseDates(commits)
  const usernames = parseUsernames(commits)
}


function parseDates(commits) {

}

function parseUsernames(commits) {

}

function isFromYesterday(commit) {

}

const USERNAMES = ['zcaceres', 'sisanchez']
function containsUsername(commits) {

}
