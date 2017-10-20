const {getTimeMaintanceInfo} = require('./getTimeMaintanceInfo.js');
const {getDistanceMaintanceInfo} = require('./getDistanceMaintenance.js');
const {getWriteOffInfo} = require('./getWriteOffInfo.js');
const {concatCarInfos, getCarInfos} = require('./utilities');

module.exports = function main(carInfos) {
    const {carInfoArray, currentDate} = getCarInfos(carInfos);
    const writeOffInfo = getWriteOffInfo(carInfoArray, currentDate);
    const distanceInfo = getDistanceMaintanceInfo(carInfoArray);
    const timeInfo = getTimeMaintanceInfo(carInfoArray, currentDate);
    return concatCarInfos(timeInfo, distanceInfo, writeOffInfo);
}