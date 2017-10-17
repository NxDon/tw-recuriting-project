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

function getDistanceMaintanceInfo() {

    let cars = [{
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
    }]
    return generateDistanceString(cars)
}

module.exports = {
    getDistanceMaintanceInfo
}
