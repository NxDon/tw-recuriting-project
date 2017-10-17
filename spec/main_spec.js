const should = require('should');
const maintainer = require('../src/main');

describe('test main', function () {
    it('should return correct string', function () {
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
        const result = maintainer.main(input);
        result.should.eql(output)
    })
});

describe("test utility functions", function () {
    it('concatCarInfos should concat inputs with correct header', function () {
        const str = 'Reminder\n  ==================';
        const timeStr = `* Time-related maintenance coming soon...
  Audi: 1 (CAR0006)
  Porsche: 1 (CAR0002)`,
            distanceStr = `* Distance-related maintenance coming soon...
  BYD: 1 (CAR0005)
  Ford: 1 (CAR0007)
  Porsche: 1 (CAR0001)`,
            writeOffStr = `* Write-off coming soon...
  BYD: 1 (CAR0004)
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
        maintainer.concatCarInfos(timeStr, distanceStr, writeOffStr).should.eql(output)
    })

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

        const carInfoArray = [{
            id: "CAR0001",
            time: "2025/04/05",
            brand: "Porsche",
            miles: 10000,
            heavyRepaired: false,
            writeOff:false
        }, {
            id: "CAR0002",
            time: "2029/10/14",
            brand: "Porsche",
            miles: 9000,
            heavyRepaired: false,
            writeOff:false
        }, {
            id: "CAR0003",
            time: "2026/08/17",
            brand: "Porsche",
            miles: 13000,
            heavyRepaired: false,
            writeOff:false
        }, {
            id: "CAR0004",
            time: "2027/11/01",
            brand: "BYD",
            miles: 23000,
            heavyRepaired: true,
            writeOff:false
        }, {
            id: "CAR0005",
            time: "2027/01/11",
            brand: "BYD",
            miles: 19500,
            heavyRepaired: false,
            writeOff:false
        }, {
            id: "CAR0006",
            time: "2029/07/01",
            brand: "Audi",
            miles: 10001,
            heavyRepaired: true,
            writeOff:false
        }, {
            id: "CAR0007",
            time: "2028/04/19",
            brand: "Ford",
            miles: 9800,
            heavyRepaired: false,
            writeOff:false
        }, {
            id: "CAR0008",
            time: "2027/07/10",
            brand: "Ford",
            miles: 15000,
            heavyRepaired: true,
            writeOff:false
        }, {
            id: "CAR0009",
            time: "2024/10/22",
            brand: "Ford",
            miles: 90300,
            heavyRepaired: false,
            writeOff:false
        }];
        const SubmitDate= `2030/09/01`
        maintainer.getCarInfos(input).should.eql({SubmitDate,carInfoArray});


    })

})