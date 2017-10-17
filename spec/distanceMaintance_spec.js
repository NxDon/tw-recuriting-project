const should = require('should');
const {getDistanceMaintanceInfo} = require('../src/getDistanceMaintanceInfo');

describe('getDistanceMaintanceInfo', function () {
    it('getDistanceMaintanceInfo should return correct string', function () {
        const obj = [{
            id: "CAR0001",
            time: "2025/04/05",
            brand: "Prosche",
            miles: 10000,
            heavyRepaired: false
        }, {
            id: "CAR0005",
            time: "2027/01/11",
            brand: "BYD",
            miles: 19500,
            heavyRepaired: false
        }, {
            id: "CAR0007",
            time: "2028/04/19",
            brand: "Ford",
            miles: 9800,
            heavyRepaired: false
        }]
        const correctResult = `* Distance-related maintenance coming soon...
  BYD: 1 (CAR0005)
  Ford: 1 (CAR0007)
  Porsche: 1 (CAR0001)`
        getDistanceMaintanceInfo(obj).should.eql(correctResult);
    });

})