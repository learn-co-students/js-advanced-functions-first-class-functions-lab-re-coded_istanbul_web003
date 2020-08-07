// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
  return [arr[0], arr[1]];
};
const returnLastTwoDrivers = function (arr) {
  return arr.slice(2).slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (int) => {
  return function (fare) {
    return fare * int;
  };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = (arr, returnFirstTwoDriver) => {
  return returnFirstTwoDriver(arr);
};
