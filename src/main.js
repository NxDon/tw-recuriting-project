const {getTimeMaintanceInfo} = require('./getTimeMaintanceInfo.js');
const {getDistanceMaintanceInfo} = require('./getDistanceMaintenance.js');
const {getWriteOffInfo} = require('./getWriteOffInfo.js');


function concatCarInfos(timeInfo, distanceInfo, writeOffInfo) {
    return `Reminder
  ==================
  * Time-related maintenance coming soon...
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

const input = `SubmitDate: 2050/05/01
  CAR0003|2047/05/02|Mercedes-Benz|37789|T`;

main(input)
