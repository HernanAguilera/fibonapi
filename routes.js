'use strict'

const express = require('express')
const actions = require('./actions')
const api = express.Router()

api.get('/:num', actions.previosNumber)

module.exports = api