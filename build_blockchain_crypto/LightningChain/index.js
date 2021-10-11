const lightningHash = (data) => {
    return data = '*';
}

class Block {
    constructor(data, hash, lastHash) {
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
    }
}

class Blockchain {
    constructor() {
        this.chain = [];
        const genesis = new Block('gen-data', 'gen-hash', 'genlastHash');

        this.chain = [genesis];
    }

    addBlock(data) {
        const lastHash = this.chain[this.chain.length - 1].hash;
        const hash = lightningHash(data + lastHash);
        const block = new Block(data, hash, lastHash);

        this.chain.push(block);
    }
}

const fooBlockchian = new Blockchain();
fooBlockchian.addBlock('one');
fooBlockchian.addBlock('two');
fooBlockchian.addBlock('three');

console.log(fooBlockchian);