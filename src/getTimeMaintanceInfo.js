const {orderCarsByBrand, enrollInList, generateString} = require('./utilities');

function isEqualOrLongerThanThreeYear(car, currentDate) {
    const currentYear = new Date(currentDate).getYear();
    const productYear = new Date(car.time).getYear();
    return currentYear - productYear >= 3

}

function shouldMaintain(car, currentDate, maintainPeriod) {
    const currentMonth = new Date(currentDate).getMonth() + 1;
    const productMonth = new Date(car.time).getMonth() + 1;
    return currentMonth === (productMonth + maintainPeriod) % 12 || (productMonth + maintainPeriod) % 12 === (currentMonth + 1) % 12
}

function timeToMaintain(car, currentDate) {
    if (car.writeOffOrMaintained || car.alreadyWriteOffed) {
        return false;
    }
    let maintainPeriod = 12;
    if (car.heavyRepaired) {
        maintainPeriod = 3;
    } else if (isEqualOrLongerThanThreeYear(car, currentDate)) {
        maintainPeriod = 6;
    }
    return shouldMaintain(car, currentDate, maintainPeriod)

}

function handleAllCars(carInfoArray, currentDate) {
    let result = [];

    carInfoArray.forEach((car) => {
        if (timeToMaintain(car, currentDate)) {
            enrollInList(car, result);
            car.writeOffOrMaintained = true
        }
    });

    return result;
}

function getTimeMaintanceInfo(carInfoArray, currentDate) {
    let result = handleAllCars(carInfoArray, currentDate);
    let sortedArray = orderCarsByBrand(result);
    return generateString(sortedArray)
}

module.exports = {
    getTimeMaintanceInfo,
    timeToMaintain
};