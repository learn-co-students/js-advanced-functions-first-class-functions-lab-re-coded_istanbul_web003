const returnFirstTwoDrivers = function(array){
    return array.slice(0, 2)
}


const returnLastTwoDrivers = function(array){
    return array.slice(array.length - 2, array.length)
}


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function FareMultiplier(a){ return a*integer}
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectingDrivers){
    return selectingDrivers(drivers)
  }