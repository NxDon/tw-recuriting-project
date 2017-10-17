function writeOffCar(carInfoArray,currentDate) {
    /*let writeOffedCars = [];
    carInfoArray.forEach((carObj) => {
        if(carWillWriteOff(carObj)) {
            writeOffedCars
        }
    })*/
}


function carWillWriteOff(car, currentDate) {
    const currentMonth = new Date(currentDate).getMonth(),
        currentYear = new Date(currentDate).getYear();
    const productYear = new Date(car.time).getYear(),
        productMonth = new Date(car.time).getMonth();
    const lifeTime = car.heavyRepaired ? 3 : 6;

    if (productYear + lifeTime < currentYear) {
        return true;//报废
    }
    if (productYear + lifeTime === currentYear) {
        return (currentMonth <= productMonth + 1)
    }
    if (productYear + lifeTime === currentYear + 1) {//处理即将跨年的情况：例如1994/1/25生产，现在:1999/12/15
        return (productMonth === 0 && currentMonth === 11)
    }
    return false;
}


function getWrtieOffInfo(carInfoArray, currentDate) {
    // let result = '';
    // let writeOffArr = writeOffCar(carInfoArray,currentDate)
    // result = generateWriteOffInfos(writeOffArr)
    return `* Write-off coming soon...
  BYD: 1 (CAR0004)
  Ford: 1 (CAR00 09)`
}

module.exports = {
    getWrtieOffInfo,
    carWillWriteOff,
    writeOffCar
}
