const SmartContract = artifacts.require("NFT");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Name", "Symbol", "https://","https://");
};
