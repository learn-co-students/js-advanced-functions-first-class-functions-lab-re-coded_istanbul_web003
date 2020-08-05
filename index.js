// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];


const returnFirstTwoDrivers = drivers=> {
    const firstTwoDrivers = drivers.slice(0, 2);
    return firstTwoDrivers;
  }

const returnLastTwoDrivers = drivers=> {
    const lastTwoDrivers = drivers.slice(-2);
    return lastTwoDrivers;
  }

  const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

  const createFareMultiplier = integer=>{
    return multiplier=>multiplier * integer;
    }

  const fareDoubler= createFareMultiplier(2);

  
  const fareTripler= createFareMultiplier(3);

  function selectDifferentDrivers(drivers, func) {
    return func(drivers);
  }