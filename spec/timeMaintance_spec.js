const should = require('should');
const {
    getTimeMaintanceInfo,
    timeToMaintain

} = require('../src/getTimeMaintanceInfo');

describe('getTimeMaintanceInfo', function () {
    let carInfos =[];
    beforeEach(() => {
        carInfos = [{
            id: 'CAR0001',
            time: '2025/04/05',
            brand: 'Porsche',
            miles: 10000,
            heavyRepaired: false,
            writeOffOrMaintained: true,
            alreadyWriteOffed: false
        },
            {
                id: 'CAR0002',
                time: '2029/10/14',
                brand: 'Porsche',
                miles: 9000,
                heavyRepaired: false,
                writeOffOrMaintained: false,
                alreadyWriteOffed: false
            },
            {
                id: 'CAR0003',
                time: '2026/08/17',
                brand: 'Porsche',
                miles: 13000,
                heavyRepaired: false,
                writeOffOrMaintained: false,
                alreadyWriteOffed: false
            },
            {
                id: 'CAR0004',
                time: '2027/11/01',
                brand: 'BYD',
                miles: 23000,
                heavyRepaired: true,
                writeOffOrMaintained: true,
                alreadyWriteOffed: false
            },
            {
                id: 'CAR0005',
                time: '2027/01/11',
                brand: 'BYD',
                miles: 19500,
                heavyRepaired: false,
                writeOffOrMaintained: true,
                alreadyWriteOffed: false
            },
            {
                id: 'CAR0006',
                time: '2029/07/01',
                brand: 'Audi',
                miles: 10001,
                heavyRepaired: true,
                writeOffOrMaintained: false,
                alreadyWriteOffed: false
            },
            {
                id: 'CAR0007',
                time: '2028/04/19',
                brand: 'Ford',
                miles: 9800,
                heavyRepaired: false,
                writeOffOrMaintained: true,
                alreadyWriteOffed: false
            },
            {
                id: 'CAR0008',
                time: '2027/07/10',
                brand: 'Ford',
                miles: 15000,
                heavyRepaired: true,
                writeOffOrMaintained: false,
                alreadyWriteOffed: true
            },
            {
                id: 'CAR0009',
                time: '2024/10/22',
                brand: 'Ford',
                miles: 90300,
                heavyRepaired: false,
                writeOffOrMaintained: true,
                alreadyWriteOffed: false
            }]
    });
    const currentDate = '2030/09/01';

    it('getTimeMaintanceInfo should return correct string', function () {
        const output = `Audi: 1 (CAR0006)
  Porsche: 1 (CAR0002)`;
        getTimeMaintanceInfo(carInfos, currentDate).should.eql(output);
    });

    it("timeToMaintain will return true if a car is time to be maintained", function () {
        // carInfos.forEach((car,index) => {
        //     if(index === 1 || index === 5){
        //         timeToMaintain(car,currentDate).should.eql(true);
        //     }else{
        //         timeToMaintain(car,currentDate).should.eql(false);
        //     }
        // })

        timeToMaintain(carInfos[0], currentDate).should.eql(false);
        timeToMaintain(carInfos[1], currentDate).should.eql(true);
        timeToMaintain(carInfos[2], currentDate).should.eql(false);
        timeToMaintain(carInfos[3], currentDate).should.eql(false);
        timeToMaintain(carInfos[4], currentDate).should.eql(false);
        timeToMaintain(carInfos[5], currentDate).should.eql(true);
        timeToMaintain(carInfos[6], currentDate).should.eql(false);
        timeToMaintain(carInfos[7], currentDate).should.eql(false);
        timeToMaintain(carInfos[8], currentDate).should.eql(false);

    });

})