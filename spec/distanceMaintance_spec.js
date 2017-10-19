const should = require('should');
const {
    getDistanceMaintanceInfo,
    handleAllCars,
    enrollDistanceList,
    carDrivedLongEnough
} = require('../src/getDistanceMaintenance');

describe('getDistanceMaintanceInfo', function () {
    const carInfos = [{
        id: 'CAR0001',
        time: '2025/04/05',
        brand: 'Porsche',
        miles: 10000,
        heavyRepaired: false,
        writeOffOrMaintained: false
    },
        {
            id: 'CAR0002',
            time: '2029/10/14',
            brand: 'Porsche',
            miles: 9000,
            heavyRepaired: false,
            writeOffOrMaintained: false
        },
        {
            id: 'CAR0003',
            time: '2026/08/17',
            brand: 'Porsche',
            miles: 13000,
            heavyRepaired: false,
            writeOffOrMaintained: false
        },
        {
            id: 'CAR0004',
            time: '2027/11/01',
            brand: 'BYD',
            miles: 23000,
            heavyRepaired: true,
            writeOffOrMaintained: true
        },
        {
            id: 'CAR0005',
            time: '2027/01/11',
            brand: 'BYD',
            miles: 19500,
            heavyRepaired: false,
            writeOffOrMaintained: false
        },
        {
            id: 'CAR0006',
            time: '2029/07/01',
            brand: 'Audi',
            miles: 10001,
            heavyRepaired: true,
            writeOffOrMaintained: false
        },
        {
            id: 'CAR0007',
            time: '2028/04/19',
            brand: 'Ford',
            miles: 9800,
            heavyRepaired: false,
            writeOffOrMaintained: false
        }, {
            id: 'CAR0008',
            time: '2027/07/10',
            brand: 'Ford',
            miles: 15000,
            heavyRepaired: true,
            writeOffOrMaintained: false
        }, {
            id: 'CAR0009',
            time: '2024/10/22',
            brand: 'Ford',
            miles: 90300,
            heavyRepaired: false,
            writeOffOrMaintained: true
        }]
    it('getDistanceMaintanceInfo should return correct string', function () {

        const correctResult = `* Distance-related maintenance coming soon...
  BYD: 1 (CAR0005)
  Ford: 1 (CAR0007)
  Porsche: 1 (CAR0001)`;
        getDistanceMaintanceInfo(carInfos).should.eql(correctResult);
    });

    it("handleAllCars should return a list contain maintain infos", function () {
        handleAllCars(carInfos).should.deepEqual([
            {
                brand: "Porsche",
                carList: ["CAR0001"],
                number: 1
            },
            {
                brand: "BYD",
                carList: ["CAR0005"],
                number: 1
            }, {
                brand: "Ford",
                carList: ["CAR0007"],
                number: 1
            },
        ])

    })

    it("enrollDistanceList should add obj to result array", function () {
        let result = [];
        enrollDistanceList({
            id: 'CAR0005',
            time: '2027/01/11',
            brand: 'BYD',
            miles: 19500,
            heavyRepaired: false,
            writeOffOrMaintained: false
        }, result);
        result.should.deepEqual([{
            brand: "BYD",
            carList: ["CAR0005"],
            number: 1
        }])
        enrollDistanceList({
            id: 'CAR0001',
            time: '2025/04/05',
            brand: 'Porsche',
            miles: 10000,
            heavyRepaired: false,
            writeOffOrMaintained: false
        }, result)
        result.should.deepEqual([{
            brand: "BYD",
            carList: ["CAR0005"],
            number: 1
        }, {brand: "Porsche", carList: ["CAR0001"], number: 1}])
        enrollDistanceList({
            id: 'CAR0010',
            time: '2027/01/11',
            brand: 'BYD',
            miles: 19500,
            heavyRepaired: false,
            writeOffOrMaintained: false
        }, result)
        result.should.deepEqual([{
            brand: "BYD",
            carList: ["CAR0005", "CAR0010"],
            number: 2
        }, {brand: "Porsche", carList: ["CAR0001"], number: 1}])

    })

    it('carDrivedLongEnough will judge a car is to be maintained due to long drive', function () {
        carInfos.forEach((car, index) => {
            if (index === 0 || index === 4 || index === 6) {
                carDrivedLongEnough(car).should.eql(true);
            } else {
                carDrivedLongEnough(car).should.eql(false);
            }
        })
    })

});