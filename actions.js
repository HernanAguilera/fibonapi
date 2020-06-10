'use strict'

const fibonacci = require('./fibonacci')

function previosNumber(req, res) {
    var num = Number(req.params.num)
    try {
        res.send({result: fibonacci.previousNumber(num)});
    } catch (error) {
        res.status(400).send({result: 'Formato de entrada invalido'})
    }
}

module.exports = {
    previosNumber
}