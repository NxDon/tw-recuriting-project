function generateTimeMaintainInfo() {
    return `* Time-related maintenance coming soon...
  Audi: 1 (CAR0006)
  Porsche: 1 (CAR0002)`;
}

function getTimeMaintanceInfo() {

    return generateTimeMaintainInfo()
}

module.exports = {
    getTimeMaintanceInfo
}