'use strict';

var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

function loan() {
  var account = {
    borrowed : 550000,
    balance : 286000,
    monthlyPayment : 1700,
    defaulted : 0,
    defaultsToForeclose : 5,
    foreclosed : false
  };

  function missPayment() {
    account.defaulted += 1;
    if (account.defaulted >= account.defaultsToForeclose) {
      account.foreclosed = true;
    }
  }
  function getBalance() {
    return account.balance;
  }
  function receivePayment(amount) {
    if (amount < account.monthlyPayment) {
      missPayment();
    }
    account.balance -= amount;
  }
  function getMonthlyPayment() {
    return account.monthlyPayment;
  }
  function isForeclosed() {
    return account.foreclosed;
  }

  return {
    getBalance: getBalance(),
    receivePayment: receivePayment(),
    getMonthlyPayment: getMonthlyPayment(),
    isForeclosed: isForeclosed()
  };
}

stevesLoan = loan();