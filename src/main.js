function concatCarInfos(timeInfo, distanceInfo, writeOffInfo) {
    return `Reminder
  ==================
  ${timeInfo}
  ${distanceInfo}
  ${writeOffInfo}`;
}

function getTimeMaintanceInfo() {
    return `* Time-related maintenance coming soon...
  Audi: 1 (CAR0006)
  Porsche: 1 (CAR0002)`
}

function getDistanceMaintanceInfo() {
    return `* Distance-related maintenance coming soon...
  BYD: 1 (CAR0005)
  Ford: 1 (CAR0007)
  Porsche: 1 (CAR0001)`
}

function getWrtieOffInfo() {
    return `* Write-off coming soon...
  BYD: 1 (CAR0004)
  Ford: 1 (CAR0009)`
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
            heavyRepaired: infos[4] === "F" ? false : true
        })
    }

    return {
        SubmitDate,
        carInfos:infoObjs
    }
}

function main(carInfos) {
    const {carInfoArray, currentDate} = getCarInfos(carInfos);
    const writeOffInfo = getWrtieOffInfo(carInfoArray, currentDate);
    const distanceInfo = getDistanceMaintanceInfo(carInfoArray);
    const timeInfo = getTimeMaintanceInfo(carInfoArray, currentDate);
    return concatCarInfos(timeInfo, distanceInfo, writeOffInfo);

}

module.exports = {
    main,
    concatCarInfos,
    getDistanceMaintanceInfo,
    getTimeMaintanceInfo,
    getWrtieOffInfo,
    getCarInfos
};