const Twitter = require('twitter')

function setup() {
  const zach = new Twitter({
    consumer_key: process.env.TWITTER_ZACH_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_ZACH_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ZACH_KEY,
    access_token_secret: process.env.TWITTER_ZACH_SECRET
  });
  const sara = new Twitter({
    consumer_key: process.env.TWITTER_SARA_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_SARA_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_SARA_KEY,
    access_token_secret: process.env.TWITTER_SARA_SECRET
  });
  return [zach, sara]
}

function sendShameMessage(client) {
  const message = 'ACCOUNTABILITY BOT: I did not complete my programming progress check in today. This was totally #amateur. I were a serious maker, I would have done it.'
  client.post('statuses/update', {
    status: message
  })
  .then(res => console.log('Sent shame message successfully', res))
  .catch(err => console.error(err))
}

module.exports = {
  setup,
  sendShameMessage
}
