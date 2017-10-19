const {orderCarsByBrand, enrollInList} = require('./utilities');

function carWillWriteOff(car, currentDate) {
    const MillisecondsOf365Days = 31536000000;
    const lifeTime = car.heavyRepaired ? 3 : 6;
    const currentMonth = new Date(currentDate).getMonth(),
        currentYear = new Date(currentDate).getYear();
    const writeOffDate = new Date(new Date(car.time).getTime() + MillisecondsOf365Days * lifeTime),
        writeOffMonth = writeOffDate.getMonth(),
        writeOffYear = writeOffDate.getYear();


    if (writeOffYear < currentYear) {
        return true;//报废
    }
    if (writeOffYear === currentYear) {
        if (currentDate > writeOffDate) {
            //已经报废
        }
        return (currentMonth === writeOffMonth || currentMonth === writeOffMonth - 1)
    }
    if (writeOffYear === currentYear + 1) {//处理即将跨年的情况：例如1994/1/25生产，现在:1999/12/15
        return (writeOffMonth === 0 && currentMonth === 11)
    }
    return false;
}


function generateWriteOffStr(carInfoArray) {
    let result = ``;
    carInfoArray.forEach((obj) => {
        result += `${obj.brand}: ${obj.number} (${obj.carList.reduce((id1, id2) => {
            return id1 + ', ' + id2
        })})\n  `;
    })
    return `* Write-off coming soon...
  ${result.trim()}`
}

function hasSameBrandWriteOffed(carObj, writeOffCars) {
    return writeOffCars.some((car) => {
        return car.brand === carObj.brand;
    })
}


function handleAllCars(carInfoArray, currentDate, writeOffCars) {
    carInfoArray.forEach((carObj) => {
        if (carWillWriteOff(carObj, currentDate)) {
            enrollInList(carObj, writeOffCars)
            carObj.writeOffOrMaintained = true;
        }
    });
}

function getWriteOffInfo(carInfoArray, currentDate) {
    let writeOffCars = [];
    handleAllCars(carInfoArray, currentDate, writeOffCars);
    let sortedArray = orderCarsByBrand(writeOffCars);
    return generateWriteOffStr(sortedArray);

}

module.exports = {
    getWriteOffInfo,
    carWillWriteOff,
    generateWriteOffStr,
    hasSameBrandWriteOffed,

}
