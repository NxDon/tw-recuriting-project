const {getTimeMaintanceInfo} = require('./getTimeMaintanceInfo.js');
const {getDistanceMaintanceInfo} = require('./getDistanceMaintenance.js');
const {getWriteOffInfo} = require('./getWriteOffInfo.js');


function concatCarInfos(timeInfo, distanceInfo, writeOffInfo) {
    return `Reminder
  ==================
  ${timeInfo}
  ${distanceInfo}
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

function main(carInfos) {
    const {carInfoArray, currentDate} = getCarInfos(carInfos);
    const writeOffInfo = getWriteOffInfo(carInfoArray, currentDate);
    const distanceInfo = getDistanceMaintanceInfo(carInfoArray);

    const timeInfo = getTimeMaintanceInfo(carInfoArray, currentDate);
    return concatCarInfos(timeInfo, distanceInfo, writeOffInfo);
}

module.exports = {
    main,
    concatCarInfos,
    getCarInfos,

};

const input = `SubmitDate: 2030/09/01
  CAR0001|2025/04/05|Porsche|10000|F
  CAR0002|2029/10/14|Porsche|9000|F
  CAR0003|2026/08/17|Porsche|13000|F
  CAR0004|2027/11/01|BYD|23000|T
  CAR0005|2027/01/11|BYD|19500|F
  CAR0006|2029/07/01|Audi|10001|T
  CAR0007|2028/04/19|Ford|9800|F
  CAR0008|2027/07/10|Ford|15000|T
  CAR0009|2024/10/22|Ford|90300|F`;

main(input)
