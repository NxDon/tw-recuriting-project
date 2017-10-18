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

function getTimeMaintanceInfo() {
    let sortedArray = [{
        brand: "Audi",
        carList: ["CAR0006"],
        number: 1
    }, {
        brand: "Porsche",
        carList: ["CAR0002"],
        number: 1
    }]
    return generateTimeString(sortedArray)
}

module.exports = {
    getTimeMaintanceInfo,
    generateTimeString
}