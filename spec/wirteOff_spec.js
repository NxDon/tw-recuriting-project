const should = require('should');
const {
    getWrtieOffInfo,
    carWillWriteOff,
} = require('../src/getWrtieOffInfo');

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

describe('test utility functions',function () {
    it('carWillWriteOff will correctly judge a car will be write off',function () {
        const currentDate = `2030/09/01`;
        const oldCars = [ {
            id: "CAR0004",
            time: "2027/11/01",
            brand: "BYD",
            miles: 23000,
            heavyRepaired: true
        },{
            id: "CAR0009",
            time: "2024/10/22",
            brand: "Ford",
            miles: 90300,
            heavyRepaired: false
        }];
        const rebostCars = [{
            id: "CAR0001",
            time: "2025/04/05",
            brand: "Porsche",
            miles: 10000,
            heavyRepaired: false
        }, {
            id: "CAR0002",
            time: "2029/10/14",
            brand: "Porsche",
            miles: 9000,
            heavyRepaired: false
        }, {
            id: "CAR0003",
            time: "2026/08/17",
            brand: "Porsche",
            miles: 13000,
            heavyRepaired: false
        },  {
            id: "CAR0005",
            time: "2027/01/11",
            brand: "BYD",
            miles: 19500,
            heavyRepaired: false
        }, {
            id: "CAR0006",
            time: "2029/07/01",
            brand: "Audi",
            miles: 10001,
            heavyRepaired: true
        }, {
            id: "CAR0007",
            time: "2028/04/19",
            brand: "Ford",
            miles: 9800,
            heavyRepaired: false
        }, {
            id: "CAR0008",
            time: "2027/07/10",
            brand: "Ford",
            miles: 15000,
            heavyRepaired: true
        },  ];
        oldCars.forEach((car) => {
            carWillWriteOff(car).should.eql(true);
        })
        rebostCars.forEach((car) => {
            carWillWriteOff(car).shoule.eql(false);
        })

    })
})