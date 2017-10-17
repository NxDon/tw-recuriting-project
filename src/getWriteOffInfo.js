const {orderCarsByBrand} = require('./utilities');
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


function generateWriteOffStr(carInfoArray) {
    let result = ``;
    carInfoArray.forEach((obj) => {
        result+=`${obj.brand}: ${obj.number} (${obj.carList.reduce((id1,id2) => {return id1+', '+id2})})\n  `;
    })
    return `* Write-off coming soon...
  ${result.trim()}`
}

function hasSameBrandWriteOffed(carObj, writeOffCars) {
    return writeOffCars.some((car) => {
        return car.brand === carObj.brand;
    })
}

function enrollWriteOffList(carObj, writeOffList) {
    if (hasSameBrandWriteOffed(carObj, writeOffList)) {
        writeOffList.forEach((obj,index) => {
            if (obj.brand === carObj.brand) {
                writeOffList[index] = {
                    brand: obj.brand,
                    carList: [...obj.carList, carObj.id],
                    number: obj.number + 1
                }
            }
        })
    } else {
        writeOffList.push({
            brand: carObj.brand,
            carList: [carObj.id],
            number: 1
        })
    }

}

function getWriteOffInfo(carInfoArray, currentDate) {
    let writeOffCars = [];
    carInfoArray.forEach((carObj) => {
        if (carWillWriteOff(carObj, currentDate)) {
            enrollWriteOffList(carObj, writeOffCars)
            carObj.writeOff = true;
        }
    });
    let sortedArray = orderCarsByBrand(writeOffCars);
    return generateWriteOffStr(sortedArray);

}

module.exports = {
    getWriteOffInfo,
    carWillWriteOff,
    generateWriteOffStr,
    hasSameBrandWriteOffed,
    enrollWriteOffList
}
