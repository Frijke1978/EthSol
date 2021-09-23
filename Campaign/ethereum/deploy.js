const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require('./build/CampaignFactory.json');

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

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });
  // .send({ gas: "1000000", from: accounts[0] });

//   console.log(compiledFactory);
  console.log("Contract deployed to", result.options.address);
};
deploy();

// node deploy.js 
// Attempting to deploy from account 0x47aa94985b3C0FcEf2AC6Fe275ad3A856e4950aD
// Contract deployed to 0x865f7E6D135c0B9719816e7f97eC6dF9E7E0c0c3