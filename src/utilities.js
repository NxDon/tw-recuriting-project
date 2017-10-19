
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
module.exports = {
    orderCarsByBrand,
    hasSameBrand,
    enrollInList
}