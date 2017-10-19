function orderCarsByBrand(array) {
    return array.sort((a,b) => {
        return a.brand > b.brand;
    })
}

function hasSameBrand(carObj, writeOffCars) {
    return writeOffCars.some((car) => {
        return car.brand === carObj.brand;
    })
}


function enrollInList(carObj, enrolledList) {
    if (hasSameBrand(carObj, enrolledList)) {
        enrolledList.forEach((obj, index) => {
            if (obj.brand === carObj.brand) {
                enrolledList[index] = {
                    brand: obj.brand,
                    carList: [...obj.carList, carObj.id],
                    number: obj.number + 1
                }
            }
        })
    } else {
        enrolledList.push({
            brand: carObj.brand,
            carList: [carObj.id],
            number: 1
        })
    }
}

function generateString(carInfoArray) {
    let result = ``;
    carInfoArray.forEach((obj) => {
        result += `${obj.brand}: ${obj.number} (${obj.carList.reduce((id1, id2) => {
            return id1 + ', ' + id2
        })})\n  `;
    });
    return result.trim();
}

module.exports = {
    orderCarsByBrand,
    hasSameBrand,
    enrollInList,
    generateString
}