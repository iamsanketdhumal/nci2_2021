//this is a basic readonly contract.js file


const Web3 = require("web3")

//instantiate web3

const rpcURL="https://ropsten.infura.io/v3/";
const web3= new Web3(rpcURL);

//get the ABI (interface) for our contract
//connect to our contract on ropsten
//run some of the methods in our contract using javascript

console.log("Hello World");