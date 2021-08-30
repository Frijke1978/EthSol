const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "draw visual employ caution beauty fringe feature dog frog lunar smooth submit",
  // remember to change this to your own phrase!
  "https://rinkeby.infura.io/v3/fe0ee19eb42149138ad910c8a0b317ef"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode, arguments: ["Hi there!"] })
    //   .send({ gas: "1000000", from: accounts[0] });
    .send({ gas: '1000000', from: accounts[0], gasPrice: '5000000000' });
	
  console.log("Contract deployed to", result.options.address);
};
deploy();
