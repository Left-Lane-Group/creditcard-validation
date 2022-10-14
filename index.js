const payform = require('payform');

// Methods
/*

  cvcInput: [Function (anonymous)],
  expiryInput: [Function (anonymous)],
  cardNumberInput: [Function (anonymous)],
  numericInput: [Function (anonymous)],
  detachCvcInput: [Function (anonymous)],
  detachExpiryInput: [Function (anonymous)],
  detachCardNumberInput: [Function (anonymous)],
  detachNumericInput: [Function (anonymous)],
  parseCardExpiry: [Function (anonymous)],
  validateCardNumber: [Function (anonymous)],
  validateCardExpiry: [Function (anonymous)],
  validateCardCVC: [Function (anonymous)],
  parseCardType: [Function (anonymous)],
  formatCardNumber: [Function (anonymous)],
  formatCardExpiry: [Function (anonymous)]

  */

// Validate a credit card number
const isCardNumberValid = payform.validateCardNumber('4242424242424242'); //=> true

// Get card type from number
const cardType = payform.parseCardType('4242424242424242'); //=> 'visa'

// Format card number
const formattedCardNumber = payform.formatCardNumber('44444'); //=> 4242 4242 4242 4242

// format card expiry
const formmatedCardExpiry = payform.formatCardExpiry('1022'); //=> 10 / 22

const parsedCardExpiry = payform.parseCardExpiry(formmatedCardExpiry); //=> {month: 10, year: 2022}

// validate expiry
const isExpiryValid = payform.validateCardExpiry(parsedCardExpiry); //=> true

// validate cvc
const isCvcValid = payform.validateCardCVC('123'); //=> true
const formatCardCVC = payform.formatCardCVC("124")
console.log(formatCardCVC)

console.log({
  type: cardType,
  isCardNumberValid,
  formmatedCardExpiry,
  parsedCardExpiry,
  isExpiryValid,
  isCvcValid,
  formattedCardNumber,
});
