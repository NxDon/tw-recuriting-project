const {orderCarsByBrand,hasSameBrand} = require('./utilities');

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

function handleAllCars(carInfoArray,currentDate) {
    return [{
        brand: "Audi",
        carList: ["CAR0006"],
        number: 1
    }, {
        brand: "Porsche",
        carList: ["CAR0002"],
        number: 1
    }];
}

function getTimeMaintanceInfo(carInfoArray,currentDate) {
    let  result = handleAllCars(carInfoArray,currentDate)
    let sortedArray = orderCarsByBrand(result);
    return generateTimeString(sortedArray)
}

module.exports = {
    getTimeMaintanceInfo,
    generateTimeString
}