const {orderCarsByBrand, hasSameBrand} = require('./utilities');

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

function enrollDistanceList(car, result) {
    if (hasSameBrand(car, result)) {
        result.forEach((obj, index) => {
            if (obj.brand === car.brand) {
                result[index] = {
                    brand: car.brand,
                    carList: [...obj.carList, car.id],
                    number: obj.number + 1
                }
            }
        })
    } else {
        result.push({
            brand: car.brand,
            carList: [car.id],
            number: 1
        })
    }
}

function carDrivedLongEnough(car) {
    return car.miles % 10000 >= 9500 || (car.miles % 10000 === 0 && car.miles / 10000 > 0);
}

function handleAllCars(carInfoArray) {
    let result = [];
    carInfoArray.forEach((car) => {
        if (carDrivedLongEnough(car)) {
            enrollDistanceList(car, result)
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
    enrollDistanceList,
    carDrivedLongEnough
}
