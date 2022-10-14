const Card = require('creditcards/card')
const types = require('creditcards-types')

const card = Card(types)

const isCardValid = card.isValid('4242424242424242')
// => true

const expiration = require('creditcards/expiration')
expiration.isPast(10, 2010)
// => true

console.log(card.format("4242424242424242"))
console.log(card)
