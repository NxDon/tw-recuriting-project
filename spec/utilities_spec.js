const should = require("should");
const utilities = require("../src/utilities");

describe("test utility functions", function () {
    let carInfoArray = [];
    beforeEach(() => {
        carInfoArray = [{
            id: "CAR0001",
            time: "2025/04/05",
            brand: "Porsche",
            miles: 10000,
            heavyRepaired: false,
            writeOffOrMaintained: false,
            alreadyWriteOffed: false
        }, {
            id: "CAR0002",
            time: "2029/10/14",
            brand: "Porsche",
            miles: 9000,
            heavyRepaired: false,
            writeOffOrMaintained: false,
            alreadyWriteOffed: false
        }, {
            id: "CAR0003",
            time: "2026/08/17",
            brand: "Porsche",
            miles: 13000,
            heavyRepaired: false,
            writeOffOrMaintained: false,
            alreadyWriteOffed: false
        }, {
            id: "CAR0004",
            time: "2027/11/01",
            brand: "BYD",
            miles: 23000,
            heavyRepaired: true,
            writeOffOrMaintained: false,
            alreadyWriteOffed: false
        }, {
            id: "CAR0005",
            time: "2027/01/11",
            brand: "BYD",
            miles: 19500,
            heavyRepaired: false,
            writeOffOrMaintained: false,
            alreadyWriteOffed: false
        }, {
            id: "CAR0006",
            time: "2029/07/01",
            brand: "Audi",
            miles: 10001,
            heavyRepaired: true,
            writeOffOrMaintained: false,
            alreadyWriteOffed: false
        }, {
            id: "CAR0007",
            time: "2028/04/19",
            brand: "Ford",
            miles: 9800,
            heavyRepaired: false,
            writeOffOrMaintained: false,
            alreadyWriteOffed: false
        }, {
            id: "CAR0008",
            time: "2027/07/10",
            brand: "Ford",
            miles: 15000,
            heavyRepaired: true,
            writeOffOrMaintained: false,
            alreadyWriteOffed: false
        }, {
            id: "CAR0009",
            time: "2024/10/22",
            brand: "Ford",
            miles: 90300,
            heavyRepaired: false,
            writeOffOrMaintained: false,
            alreadyWriteOffed: false
        }];
    })
    it("orderCarsByBrand should sort array by its brand name alphabetically", function () {
        const result = [
            {
                id: 'CAR0006',
                time: '2029/07/01',
                brand: 'Audi',
                miles: 10001,
                heavyRepaired: true,
                writeOffOrMaintained: false,
                alreadyWriteOffed: false
            }, {
                id: 'CAR0004',
                time: '2027/11/01',
                brand: 'BYD',
                miles: 23000,
                heavyRepaired: true,
                writeOffOrMaintained: false,
                alreadyWriteOffed: false
            }, {
                id: 'CAR0005',
                time: '2027/01/11',
                brand: 'BYD',
                miles: 19500,
                heavyRepaired: false,
                writeOffOrMaintained: false,
                alreadyWriteOffed: false
            }, {
                id: 'CAR0007',
                time: '2028/04/19',
                brand: 'Ford',
                miles: 9800,
                heavyRepaired: false,
                writeOffOrMaintained: false,
                alreadyWriteOffed: false
            }, {
                id: 'CAR0008',
                time: '2027/07/10',
                brand: 'Ford',
                miles: 15000,
                heavyRepaired: true,
                writeOffOrMaintained: false,
                alreadyWriteOffed: false
            },
            {
                id: 'CAR0009',
                time: '2024/10/22',
                brand: 'Ford',
                miles: 90300,
                heavyRepaired: false,
                writeOffOrMaintained: false,
                alreadyWriteOffed: false
            },
            {
                id: 'CAR0001',
                time: '2025/04/05',
                brand: 'Porsche',
                miles: 10000,
                heavyRepaired: false,
                writeOffOrMaintained: false,
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
            }
        ]
        utilities.orderCarsByBrand(carInfoArray).should.eql(result);

    });

    it('enrollInList should add carObj or modified existed obj in given list', function () {
        enrolledList = [{
            brand: "Ford",
            carList: ["CAR0002"],
            number: 1
        }];
        cars = [{
            id: "CAR0006",
            time: "2024/07/01",
            brand: "Audi",
            miles: 10001,
            heavyRepaired: true,
            writeOffOrMaintained: false,
            alreadyWriteOffed: false
        }, {
            id: "CAR0007",
            time: "2023/04/19",
            brand: "Ford",
            miles: 9800,
            heavyRepaired: false,
            writeOffOrMaintained: false,
            alreadyWriteOffed: false
        }]
        utilities.enrollInList(cars[0], enrolledList);
        utilities.enrollInList(cars[1], enrolledList);
        enrolledList.should.deepEqual(
            [{
                brand: "Ford",
                carList: ["CAR0002", "CAR0007"],
                number: 2
            }, {
                brand: "Audi",
                carList: ["CAR0006"],
                number: 1
            }]
        )
    });

    it("generateString will generate string", function () {
        let list = [{
            brand: "Audi",
            carList: ["CAR0006"],
            number: 1
        }, {
            brand: "Porsche",
            carList: ["CAR0002"],
            number: 1
        }];
        utilities.generateString(list).should.eql(`Audi: 1 (CAR0006)
  Porsche: 1 (CAR0002)`);

    })

    it('concatCarInfos should concat inputs with correct header', function () {
        const str = 'Reminder\n  ==================';
        const timeStr = `Audi: 1 (CAR0006)
  Porsche: 1 (CAR0002)`,
            distanceStr = `BYD: 1 (CAR0005)
  Ford: 1 (CAR0007)
  Porsche: 1 (CAR0001)`,
            writeOffStr = `BYD: 1 (CAR0004)
  Ford: 1 (CAR0009)`;
        const output = `Reminder
  ==================
  * Time-related maintenance coming soon...
  Audi: 1 (CAR0006)
  Porsche: 1 (CAR0002)
  * Distance-related maintenance coming soon...
  BYD: 1 (CAR0005)
  Ford: 1 (CAR0007)
  Porsche: 1 (CAR0001)
  * Write-off coming soon...
  BYD: 1 (CAR0004)
  Ford: 1 (CAR0009)`;
        utilities.concatCarInfos(timeStr, distanceStr, writeOffStr).should.eql(output)
    });

    it("getCarInfos should return object array", function () {

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

        const SubmitDate = `2030/09/01`;
        utilities.getCarInfos(input).should.eql({currentDate: SubmitDate, carInfoArray});
    })
})


