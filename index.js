// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0,2) 
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2)
     
  }


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
  

const createFareMultiplier = (ride) => {
  let multipliyer = (fare) => {
    return ride * fare
  }
  return multipliyer
}

const fareDoubler= createFareMultiplier(2);
const fareTripler= createFareMultiplier(3);

function selectDifferentDrivers(array,twoDrivers){
  return twoDrivers(array);
}

document.getElementById("mocha").innerHTML = 'ARRAY 1: ' + returnFirstTwoDrivers(drivers) + '<br/>ARRAY 2: ' + returnLastTwoDrivers(drivers) +  '<br/>ARRAY 3:' + selectingDrivers[0] + selectingDrivers[1];

