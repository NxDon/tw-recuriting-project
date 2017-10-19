const {orderCarsByBrand, enrollInList,generateString} = require('./utilities');

function carDrivenLongEnough(car) {
    if (car.writeOffOrMaintained || car.alreadyWriteOffed) {
        return false;
    }
    return car.miles % 10000 >= 9500 || (car.miles % 10000 === 0 && car.miles / 10000 > 0);
}

function handleAllCars(carInfoArray) {
    let result = [];
    carInfoArray.forEach((car) => {
        if (carDrivenLongEnough(car)) {
            enrollInList(car, result);
            car.writeOffOrMaintained = true
        }
    });
    return result;
}

function getDistanceMaintanceInfo(carInfoArray) {
    let result = handleAllCars(carInfoArray);
    let sortedArray = orderCarsByBrand(result);
    return generateString(sortedArray)
}

module.exports = {
    getDistanceMaintanceInfo,
    handleAllCars,
    carDrivenLongEnough
};
