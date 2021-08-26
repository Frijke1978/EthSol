const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //constructor
const web3 = new Web3(ganache.provider()); //instance


class Car {
    park() {
        return 'stopped'
    }

    drive() {
        return 'vroom'
    }
}

let car;

beforeEach(() => {
    car = new Car();
})

describe('Car', () => {
    it('can park', () => {
        // const car = new Car();
        assert.equal(car.park(), 'stopped');
    });

    it('can drive', () => {
        // const car = new Car();
        assert.equal(car.drive(), 'vroom');
    });
});