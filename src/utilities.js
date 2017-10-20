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

function concatCarInfos(timeInfo, distanceInfo, writeOffInfo) {
    return `Reminder
  ==================
  * Time-related maintenance coming soon...
  ${timeInfo}
  * Distance-related maintenance coming soon...
  ${distanceInfo}
  * Write-off coming soon...
  ${writeOffInfo}`;
}

function getCarInfos(carInfos) {
    const inputArray = carInfos.split('\n');
    const SubmitDate = inputArray[0].split(':')[1].trim();
    let infoObjs = [];
    for (let i = 1; i < inputArray.length; i++) {
        let infos = inputArray[i].trim().split('|');
        infoObjs.push({
            id: infos[0],
            time: infos[1],
            brand: infos[2],
            miles: parseInt(infos[3]),
            heavyRepaired: infos[4] !== "F",
            writeOffOrMaintained:false,
            alreadyWriteOffed : false
        })
    }

    return {
        currentDate:SubmitDate,
        carInfoArray:infoObjs
    }
}

module.exports = {
    orderCarsByBrand,
    concatCarInfos,
    getCarInfos,
    enrollInList,
    generateString
};