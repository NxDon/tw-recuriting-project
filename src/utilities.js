
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
module.exports = {
    orderCarsByBrand,
    hasSameBrand
}