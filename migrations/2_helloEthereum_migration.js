var HelloEthereum = artifacts.require("./HelloEthereum.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloEthereum);
};
