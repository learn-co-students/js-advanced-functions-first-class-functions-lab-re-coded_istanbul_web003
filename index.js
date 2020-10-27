// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    let tmp  = [drivers[0],drivers[1]];
    return tmp
}
const returnLastTwoDrivers= function(drivers){
    let tmp  = [drivers[drivers.length-2],drivers[drivers.length-1]];
    return tmp
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(int){
        return function(fare){
                return fare*int;
        }
} 

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(arr,f){
    return f(arr);
}