
function orderCarsByBrand(array) {
    return array.sort((a,b) => {
        return a.brand > b.brand;
    })
}



module.exports = {
    orderCarsByBrand
}