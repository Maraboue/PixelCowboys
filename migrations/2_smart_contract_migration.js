const SmartContract = artifacts.require("Pixel_Cowboys");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "Name", "Symbol", "https://");
};
