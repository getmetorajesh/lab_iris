require('dotenv').config();


module.exports = {
    witToken: process.env.WIT_API_TOKEN,
    slackToken: process.env.SLACK_BOT_TOKEN,
    slackLogLevel: 'verbose'
};