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
    return `* Write-off coming soon...
  BYD: 1 (CAR0004)
  Ford: 1 (CAR0009)`
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
    return generateWriteOffStr(carInfoArray);

}

module.exports = {
    getWriteOffInfo,
    carWillWriteOff,
    generateWriteOffStr,
    hasSameBrandWriteOffed,
    enrollWriteOffList
}

writeOffList = [{
    brand: "Ford",
    carList: ["CAR0002"],
    number: 1
}];
cars = [{
    id: "CAR0006",
    time: "2024/07/01",
    brand: "Audi",
    miles: 10001,
    heavyRepaired: true,
    writeOff: false
}, {
    id: "CAR0007",
    time: "2023/04/19",
    brand: "Ford",
    miles: 9800,
    heavyRepaired: false,
    writeOff: false
}]
enrollWriteOffList(cars[1],writeOffList);