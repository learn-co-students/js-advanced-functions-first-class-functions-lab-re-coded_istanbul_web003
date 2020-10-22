// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){
    return function(){
        return x**2;
    }
}

function fareDoubler(x){
    return x*2;
}

function fareTripler(x){
    return x*3;
}

function selectDifferentDrivers(drivers, kha){
    return kha(drivers);
} 