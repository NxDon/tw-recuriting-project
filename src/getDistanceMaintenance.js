const {orderCarsByBrand, enrollInList} = require('./utilities');

function generateDistanceString(carInfoArray) {
    let result = ``;
    carInfoArray.forEach((obj) => {
        result += `${obj.brand}: ${obj.number} (${obj.carList.reduce((id1, id2) => {
            return id1 + ', ' + id2
        })})\n  `;
    })
    return `* Distance-related maintenance coming soon...
  ${result.trim()}`;
}


function carDrivedLongEnough(car) {
    if (car.writeOffOrMaintained || car.alreadyWriteOffed) {
        return false;
    }
    return car.miles % 10000 >= 9500 || (car.miles % 10000 === 0 && car.miles / 10000 > 0);
}

function handleAllCars(carInfoArray) {
    let result = [];
    carInfoArray.forEach((car) => {
        if (carDrivedLongEnough(car)) {
            enrollInList(car, result)
            car.writeOffOrMaintained = true
        }
    })

    return result;
}

function getDistanceMaintanceInfo(carInfoArray) {
    let result = handleAllCars(carInfoArray)
    let sortedArray = orderCarsByBrand(result)
    return generateDistanceString(sortedArray)
}

module.exports = {
    getDistanceMaintanceInfo,
    handleAllCars,
    carDrivedLongEnough
}
