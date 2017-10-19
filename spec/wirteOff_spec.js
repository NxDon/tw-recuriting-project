const should = require('should');
const {
    getWriteOffInfo,
    carWillWriteOff,
    generateWriteOffStr,
    hasSameBrandWriteOffed,
    enrollInList,
} = require('../src/getWriteOffInfo');

describe('getWriteOffInfo', function () {
    const carInfoArray = [{
        id: "CAR0001",
        time: "2025/04/05",
        brand: "Porsche",
        miles: 10000,
        heavyRepaired: false,
        writeOffOrMaintained: false,
        alreadyWriteOffed : false
    }, {
        id: "CAR0002",
        time: "2029/10/14",
        brand: "Porsche",
        miles: 9000,
        heavyRepaired: false,
        writeOffOrMaintained: false,
        alreadyWriteOffed : false
    }, {
        id: "CAR0003",
        time: "2026/08/17",
        brand: "Porsche",
        miles: 13000,
        heavyRepaired: false,
        writeOffOrMaintained: false,
        alreadyWriteOffed : false
    }, {
        id: "CAR0004",
        time: "2027/11/01",
        brand: "BYD",
        miles: 23000,
        heavyRepaired: true,
        writeOffOrMaintained: false,
        alreadyWriteOffed : false
    }, {
        id: "CAR0005",
        time: "2027/01/11",
        brand: "BYD",
        miles: 19500,
        heavyRepaired: false,
        writeOffOrMaintained: false,
        alreadyWriteOffed : false
    }, {
        id: "CAR0006",
        time: "2029/07/01",
        brand: "Audi",
        miles: 10001,
        heavyRepaired: true,
        writeOffOrMaintained: false,
        alreadyWriteOffed : false
    }, {
        id: "CAR0007",
        time: "2028/04/19",
        brand: "Ford",
        miles: 9800,
        heavyRepaired: false,
        writeOffOrMaintained: false,
        alreadyWriteOffed : false
    }, {
        id: "CAR0008",
        time: "2027/07/10",
        brand: "Ford",
        miles: 15000,
        heavyRepaired: true,
        writeOffOrMaintained: false,
        alreadyWriteOffed : false
    }, {
        id: "CAR0009",
        time: "2024/10/22",
        brand: "Ford",
        miles: 90300,
        heavyRepaired: false,
        writeOffOrMaintained: false,
        alreadyWriteOffed : false
    }];
    it("getWriteOffInfo should return correct string ", function () {
        const currentDate = `2030/09/01`;
        // const obj = [{
        //     id: "CAR0004",
        //     time: "2026/08/17",
        //     brand: "BYD",
        //     miles: 13000,
        //     heavyRepaired: true,
        //     writeOffOrMaintained: false,
        //     alreadyWriteOffed : false
        // }, {
        //     id: "CAR0009",
        //     time: "2024/10/22",
        //     brand: "Ford",
        //     miles: 90300,
        //     heavyRepaired: false,
        //     writeOffOrMaintained: false,
        //     alreadyWriteOffed : false
        // }];

        const correctResult = `* Write-off coming soon...
  BYD: 1 (CAR0004)
  Ford: 1 (CAR0009)`;
        getWriteOffInfo(carInfoArray,currentDate).should.eql(correctResult)
    })
})

describe('test utility functions', function () {
    let carInfoArray = [];
    beforeEach(() => {
        carInfoArray=[{
            id: "CAR0001",
            time: "2025/04/05",
            brand: "Porsche",
            miles: 10000,
            heavyRepaired: false,
            writeOffOrMaintained: false,
            alreadyWriteOffed : false
        }, {
            id: "CAR0002",
            time: "2029/10/14",
            brand: "Porsche",
            miles: 9000,
            heavyRepaired: false,
            writeOffOrMaintained: false,
            alreadyWriteOffed : false
        }, {
            id: "CAR0003",
            time: "2026/08/17",
            brand: "Porsche",
            miles: 13000,
            heavyRepaired: false,
            writeOffOrMaintained: false,
            alreadyWriteOffed : false
        }, {
            id: "CAR0004",
            time: "2027/11/01",
            brand: "BYD",
            miles: 23000,
            heavyRepaired: true,
            writeOffOrMaintained: false,
            alreadyWriteOffed : false
        }, {
            id: "CAR0005",
            time: "2027/01/11",
            brand: "BYD",
            miles: 19500,
            heavyRepaired: false,
            writeOffOrMaintained: false,
            alreadyWriteOffed : false
        }, {
            id: "CAR0006",
            time: "2029/07/01",
            brand: "Audi",
            miles: 10001,
            heavyRepaired: true,
            writeOffOrMaintained: false,
            alreadyWriteOffed : false
        }, {
            id: "CAR0007",
            time: "2028/04/19",
            brand: "Ford",
            miles: 9800,
            heavyRepaired: false,
            writeOffOrMaintained: false,
            alreadyWriteOffed : false
        }, {
            id: "CAR0008",
            time: "2027/07/10",
            brand: "Ford",
            miles: 15000,
            heavyRepaired: true,
            writeOffOrMaintained: false,
            alreadyWriteOffed : false
        }, {
            id: "CAR0009",
            time: "2024/10/22",
            brand: "Ford",
            miles: 90300,
            heavyRepaired: false,
            writeOffOrMaintained: false,
            alreadyWriteOffed : false
        }];
        enrolledList = [{
            brand: "Ford",
            carList: ["CAR0002"],
            number: 1
        }];
    })

    it('carWillWriteOff will correctly judge a car will be write off', function () {
        const currentDate = `2030/09/01`;
        carInfoArray.forEach((car,index) => {
            if(index === 3 || index ===8){
                carWillWriteOff(car, currentDate).should.eql(true);
            }else{
                carWillWriteOff(car, currentDate).should.eql(false);
            }
        })
    })

    it('hasSameBrandWriteOffed return true if there is already same brand cars write offed', function () {
        hasSameBrandWriteOffed(carInfoArray[6], enrolledList).should.eql(true);
        hasSameBrandWriteOffed(carInfoArray[5], enrolledList).should.eql(false);
    })

    it.skip('generateWriteOffStr should return correct string',function () {
        let list = [{
            brand: "Audi",
            carList: ["CAR0006"],
            number: 1
        },{
            brand: "Ford",
            carList: ["CAR0002", "CAR0007"],
            number: 2
        } ]
        generateWriteOffStr(list).should.eql(`* Write-off coming soon...
  Audi: 1 (CAR0006)
  Ford: 2 (CAR0002, CAR0007)`)
    })
});