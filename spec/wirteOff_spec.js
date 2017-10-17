const should = require('should');
const {getWrtieOffInfo} = require('../src/getWrtieOffInfo');

describe('getWrtieOffInfo', function () {

    it("getWrtieOffInfo should return correct string ", function () {
        const currentDate = `2030/09/01`;
        const obj = [{
            id: "CAR0004",
            time: "2027/11/01",
            brand: "BYD",
            miles: 23000,
            heavyRepaired: true
        }, {
            id: "CAR0009",
            time: "2024/10/22",
            brand: "Ford",
            miles: 90300,
            heavyRepaired: false
        }];

        const correctResult = `* Write-off coming soon...
  BYD: 1 (CAR0004)
  Ford: 1 (CAR0009)`;
        getWrtieOffInfo(obj).should.eql(correctResult)
    })
})