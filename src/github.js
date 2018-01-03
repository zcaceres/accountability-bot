const GitHubAPI = require('github')

function setup() {
  return new GitHubAPI()
}

function getYesterday(date) {
  const d = date
  return d.setDate(d.getDate()-1).toISOString();
}

function fetchCommitLog(owner, repo, client, cb) {
  const today = new Date().toISOString()
  const yesterday = getYesterday(today)
  client.repos.getCommits({
    owner,
    repo,
    until: yesterday
  }, cb)
}

function getMostRecentCommits(log) {

}

module.exports = {
  setup,
  fetchCommitLog,
  getMostRecentCommits
}
