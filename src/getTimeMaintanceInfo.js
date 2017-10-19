const {orderCarsByBrand, enrollInList} = require('./utilities');

function generateTimeString(carInfoArray) {
    let result = ``;
    carInfoArray.forEach((obj) => {
        result += `${obj.brand}: ${obj.number} (${obj.carList.reduce((id1, id2) => {
            return id1 + ', ' + id2
        })})\n  `;
    });
    return `* Time-related maintenance coming soon...
  ${result.trim()}`;
}

function isLongerThanThreeYear(car, currentDate) {
    const currentMonth = new Date(currentDate).getMonth(),
        currentYear = new Date(currentDate).getYear();
    const productYear = new Date(car.time).getYear(),
        productMonth = new Date(car.time).getMonth();
    if (currentYear - productYear > 3) {
        return true;
    } else if (currentYear - productYear === 3) {
        return currentMonth >= productMonth
    }
    return false;
}

function shouldMaintain(car, currentDate, maintainPeriod) {
    const currentMonth = new Date(currentDate).getMonth() + 1,
        currentYear = new Date(currentDate).getYear();
    const productYear = new Date(car.time).getYear(),
        productMonth = new Date(car.time).getMonth() + 1;
    let res1 = currentMonth === (productMonth + maintainPeriod) % 12;
    let res2 = currentMonth + 1 === (productMonth + maintainPeriod) % 12
    return currentMonth === (productMonth + maintainPeriod) % 12 || (productMonth + maintainPeriod) % 12 === (currentMonth + 1) % 12
}

function timeToMaintain(car, currentDate) {
    if (car.writeOffOrMaintained || car.alreadyWriteOffed) {
        return false;
    }
    let maintainPeriod = 12;
    if (car.heavyRepaired) {
        maintainPeriod = 3;
    } else if (isLongerThanThreeYear(car, currentDate)) {
        maintainPeriod = 6;
    }
    return shouldMaintain(car, currentDate, maintainPeriod)

}

function handleAllCars(carInfoArray, currentDate) {
    let result = [];

    carInfoArray.forEach((car) => {
        if (timeToMaintain(car, currentDate)) {
            enrollInList(car, result)
            car.writeOffOrMaintained = true
        }
    });

    return result;
}

function getTimeMaintanceInfo(carInfoArray, currentDate) {
    let result = handleAllCars(carInfoArray, currentDate)
    let sortedArray = orderCarsByBrand(result);
    return generateTimeString(sortedArray)
}

module.exports = {
    getTimeMaintanceInfo,
    generateTimeString,
    timeToMaintain
}