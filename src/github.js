const GitHubAPI = require('github')

function setup() {
  return new GitHubAPI()
}

function getYesterday(date) {
  const d = date
  d.setDate(d.getDate()-1)
  return d.toISOString()
}

function fetchCommitLog(owner, repo, client, cb) {
  const today = new Date()
  const yesterday = getYesterday(today)
  client.repos.getCommits({
    owner,
    repo,
    since: yesterday
  }, cb)
}

function getMostRecentCommits(logs) {
  return logs.map(log => log.author).map(author => author.login)
}

module.exports = {
  setup,
  fetchCommitLog,
  getMostRecentCommits
}
