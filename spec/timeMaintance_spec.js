const should = require('should');
const {getTimeMaintanceInfo} = require('../src/getTimeMaintanceInfo');

describe('getTimeMaintanceInfo', function () {
    it('getTimeMaintanceInfo should return correct string', function () {
        const currentDate = `2030/09/01`;
        const obj = [{
            id: "CAR0002",
            time: "2029/10/14",
            brand: "Prosche",
            miles: 9000,
            heavyRepaired: false
        }, {
            id: "CAR0006",
            time: "2029/07/01",
            brand: "Audi",
            miles: 10001,
            heavyRepaired: true
        }];
        const correctResult = `* Time-related maintenance coming soon...
  Audi: 1 (CAR0006)
  Porsche: 1 (CAR0002)`;
        getTimeMaintanceInfo(obj).should.eql(correctResult);
    })
})