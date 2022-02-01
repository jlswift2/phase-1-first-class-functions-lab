const returnFirstTwoDrivers = function(drivers){
    return([drivers[0], drivers[1]])
}

const returnLastTwoDrivers = function(drivers){
    return([drivers[drivers.length - 2], drivers[drivers.length - 1]])
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(fare) {
        return int * fare;
    };
}



function fareDoubler(fare) {
    const baseFare = createFareMultiplier(2);
    return(baseFare(fare));
}

function fareTripler(fare) {
    const baseFare = createFareMultiplier(3);
    return(baseFare(fare));
}

function selectDifferentDrivers(drivers, cb){
    return(cb(drivers));
}
