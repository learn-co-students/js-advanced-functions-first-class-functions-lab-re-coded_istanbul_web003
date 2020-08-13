// Code your solution in this file!

const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
}

const returnLastTwoDrivers = function (array) {
  return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



function createFareMultiplier(integer) {
  return function(fare) {return fare * integer};
}


//let result = createFareMultiplier()

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}

/*
createFareMultiplier() — This is a higher-order function that takes in one argument, 
an integer, and returns a function that will multiply a fare for a ride accordingly. 
If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument
 and quadruples the fare.

fareDoubler() — Declare a variable with const and assign a function returned 
by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() 
function accepts a fare as its lone argument and doubles it.

fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
 Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument
  and triples it.

selectDifferentDrivers() — This function takes two arguments, 
an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. 
Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or 
the last two drivers.
Resources
 */
