const SmartContract = artifacts.require("PixelCowboys");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Name", "Symbol", "https://","https://");
};
