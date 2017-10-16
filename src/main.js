function concatCarInfos(timeInfo, distanceInfo, writeOffInfo) {
    return `Reminder
  ==================
  ${timeInfo}
  ${distanceInfo}
  ${writeOffInfo}`;
}

function getTimeMaintanceInfo() {
    return`* Time-related maintenance coming soon...
  Audi: 1 (CAR0006)
  Porsche: 1 (CAR0002)`
}

function getDistanceMaintanceInfo() {
    return `* Distance-related maintenance coming soon...
  BYD: 1 (CAR0005)
  Ford: 1 (CAR0007)
  Porsche: 1 (CAR0001)`
}

function getWrtieOffMaintanceInfo() {
    return `* Write-off coming soon...
  BYD: 1 (CAR0004)
  Ford: 1 (CAR0009)`
}

function getCarInfos(carInfos) {

}

function main(carInfos) {
    const carInfoArray = getCarInfos(carInfos);
    const timeInfo = getTimeMaintanceInfo(carInfoArray);
    const distanceInfo = getDistanceMaintanceInfo(carInfoArray);
    const writeOffInfo = getWrtieOffMaintanceInfo(carInfoArray);
    const output = concatCarInfos(timeInfo, distanceInfo, writeOffInfo);
    return output;
}

module.exports = {
    main,
    concatCarInfos,
    getDistanceMaintanceInfo,
    getTimeMaintanceInfo,
    getWrtieOffMaintanceInfo,
    getCarInfos
};