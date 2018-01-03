const axios = require('axios')
const Twitter = require('twitter')

/* global process require setInterval */

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

  'ACCOUNTABILITY BOT: I, ${name}, did not complete my programming progress check in today.
  This was totally #amateur. I were a serious maker, I would have done it.'

  Logs Repo: https://github.com/zcaceres/progress-logs.git
  Sara Twitter: @sarasanchezgt
  Zach Twitter: @zachcaceres
  Sara Github: @sisanchez
  Zach Github: @zcaceres
*/

function setupTwitterClients() {
  const zach = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ZACH_KEY,
    access_token_secret: process.env.TWITTER_ZACH_SECRET
  });
  const sara = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_SARA_KEY,
    access_token_secret: process.env.TWITTER_SARA_SECRET
  });
}

function timer(duration) {
  // TODO: REMOVE ME
  sendShameMessage()
  // setInterval(commitmentCheck, duration)
}
module.exports = timer

function commitmentCheck() {
  const log = fetchCommitLog()
  const commits = getMostRecentCommits(log)
  const dates = parseDates(commits)
  const usernames = parseUsernames(commits)
}

function fetchCommitLog(repoUrl) {

}

function getMostRecentCommits(log) {

}

function parseDates(commits) {

}

function parseUsernames(commits) {

}

function isFromYesterday(commit) {

}

function containsUsername() {

}

function sendShameMessage(client) {
  client.post('statuses/update', {
    status: 'TESTING'
  })
}
