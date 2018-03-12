#!/usr/bin/env node
const Twitter = require('twitter');

const config = require('./config');

const status = process.argv[2];

config.accounts.forEach(account => {
  const client = new Twitter(account);
  client.post('statuses/update', { status });
});
