const {orderCarsByBrand} = require('./utilities');

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

}

function handleAllCars(carInfoArray) {
    let result = [];
    let filtered =  [
        {
            brand: "BYD",
            carList: ["CAR0005"],
            number: 1
        },{
            brand: "Ford",
            carList: ["CAR0007"],
            number: 1
        },{
            brand: "Porsche",
            carList: ["CAR0001"],
            number: 1
        }
    ]
    filtered.forEach((car) => {
        enrollDistanceList(car,result)
    })
    result = [{
        brand: "BYD",
        carList: ["CAR0005"],
        number: 1
    }, {
        brand: "Ford",
        carList: ["CAR0007"],
        number: 1
    }, {
        brand: "Porsche",
        carList: ["CAR0001"],
        number: 1
    }];
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
    enrollDistanceList
}
