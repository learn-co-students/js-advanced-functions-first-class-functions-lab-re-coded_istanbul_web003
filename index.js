// Code your solution in this file!
const returnFirstTwoDrivers = function(x) {
    return x.slice(0, 2);
}

const returnLastTwoDrivers = function(x) {
    return x.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(mult) {
    return function () {
        return mult**2;
    }
}

const fareDoubler = function(x) {
    return 2*x;
}

const fareTripler = function(x) {
    return 3*x;
}

const selectDifferentDrivers = function(drivers, chooseWhichDrivers) {
    return chooseWhichDrivers(drivers);
}