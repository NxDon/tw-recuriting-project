const should = require("should");
const utilities = require("../src/utilities");

describe("test utility functions",function () {
    const carInfoArray = [{
        id: "CAR0001",
        time: "2025/04/05",
        brand: "Porsche",
        miles: 10000,
        heavyRepaired: false,
        writeOffOrMaintained: false
    }, {
        id: "CAR0002",
        time: "2029/10/14",
        brand: "Porsche",
        miles: 9000,
        heavyRepaired: false,
        writeOffOrMaintained: false
    }, {
        id: "CAR0003",
        time: "2026/08/17",
        brand: "Porsche",
        miles: 13000,
        heavyRepaired: false,
        writeOffOrMaintained: false
    }, {
        id: "CAR0004",
        time: "2027/11/01",
        brand: "BYD",
        miles: 23000,
        heavyRepaired: true,
        writeOffOrMaintained: false
    }, {
        id: "CAR0005",
        time: "2027/01/11",
        brand: "BYD",
        miles: 19500,
        heavyRepaired: false,
        writeOffOrMaintained: false
    }, {
        id: "CAR0006",
        time: "2029/07/01",
        brand: "Audi",
        miles: 10001,
        heavyRepaired: true,
        writeOffOrMaintained: false
    }, {
        id: "CAR0007",
        time: "2028/04/19",
        brand: "Ford",
        miles: 9800,
        heavyRepaired: false,
        writeOffOrMaintained: false
    }, {
        id: "CAR0008",
        time: "2027/07/10",
        brand: "Ford",
        miles: 15000,
        heavyRepaired: true,
        writeOffOrMaintained: false
    }, {
        id: "CAR0009",
        time: "2024/10/22",
        brand: "Ford",
        miles: 90300,
        heavyRepaired: false,
        writeOffOrMaintained: false
    }];

    it("orderCarsByBrand should sort array by its brand name alphabetically", function () {
        const result = [
            {
                id: 'CAR0006',
                time: '2029/07/01',
                brand: 'Audi',
                miles: 10001,
                heavyRepaired: true,
                writeOffOrMaintained: false
            }, {
                id: 'CAR0004',
                time: '2027/11/01',
                brand: 'BYD',
                miles: 23000,
                heavyRepaired: true,
                writeOffOrMaintained: false
            }, {
                id: 'CAR0005',
                time: '2027/01/11',
                brand: 'BYD',
                miles: 19500,
                heavyRepaired: false,
                writeOffOrMaintained: false
            }, {
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
            },
            {
                id: 'CAR0009',
                time: '2024/10/22',
                brand: 'Ford',
                miles: 90300,
                heavyRepaired: false,
                writeOffOrMaintained: false
            },
            {
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
            }
        ]
        utilities.orderCarsByBrand(carInfoArray).should.eql(result);

    })



})