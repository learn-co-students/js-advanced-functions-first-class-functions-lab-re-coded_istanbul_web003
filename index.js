// Code your solution in this file!
const returnFirstTwoDrivers = function(arrDrivers){
    return [arrDrivers[0],arrDrivers[1]]
}

const returnLastTwoDrivers = function(arrDrivers){
    return [arrDrivers[arrDrivers.length-2],arrDrivers[arrDrivers.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const selectDifferentDrivers = function(arrayOfDrivers,func){
    return func(arrayOfDrivers)
}
const fareDoubler = function(fare){return fare*2}
const fareTripler = function(fare){return fare*3}
const fareQuintupler = function(fare){return fare*4}

const createFareMultiplier = function(multiplierNum){
    return function(fare){
        if (multiplierNum===2){return fareDoubler(fare)}
        else if(multiplierNum===3){return fareTripler(fare)}
        else if(multiplierNum===4){return fareQuintupler(fare)}
        else {return fare*multiplierNum}        
    }
}
