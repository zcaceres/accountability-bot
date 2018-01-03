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
*/
