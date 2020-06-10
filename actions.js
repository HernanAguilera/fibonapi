'use strict'

const fibonacci = require('./fibonacci')

function previosNumber(req, res) {
    var num = Number(req.params.num)
    try {
        res.send({result: fibonacci.previousNumber(num)});
    } catch (error) {
        res.send({result: 'Error'});
    }
}

module.exports = {
    previosNumber
}