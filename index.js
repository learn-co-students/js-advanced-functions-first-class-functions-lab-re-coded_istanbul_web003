// Code your solution in this file!
const drivers = ["Sally", "Bob", "Freddy", "Claudia"];

const returnFirstTwoDrivers = function () {
  return drivers.slice(0, 2);
};

returnFirstTwoDrivers();

const returnLastTwoDrivers=function () {
  return drivers.slice(-2);  
}
returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};
let fareDoubler = createFareMultiplier(2);

let fareTripler = createFareMultiplier(3);

fareDoubler();
fareTripler();

function selectDifferentDrivers (drivers,f) {
    return f(drivers);
};
 
selectDifferentDrivers();
