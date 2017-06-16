#!/usr/bin/env node

const _ = require('lodash')

process.stdin.on('readable', () => {
  var chunk = process.stdin.read()
  if (chunk !== null) {
    process.stdout.write(_.template(chunk)(process.env))
  }
})