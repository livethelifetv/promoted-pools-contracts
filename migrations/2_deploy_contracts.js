const PromotedPool = artifacts.require("./PromotedPool.sol");

module.exports = function(deployer, network) {
  const tokenName = "Pools.fyi Promo"
  const tokenSymbol = "FYI"
  // OpenSea proxy registry addresses for rinkeby and mainnet.
  let proxyRegistryAddress = ""
  if (network === 'rinkeby') {
    proxyRegistryAddress = "0xf57b2c51ded3a29e6891aba85459d600256cf317";
  } else {
    proxyRegistryAddress = "0xa5409ec958c83c3f309868babaca7c86dcb077c1";
  }

  deployer.deploy(PromotedPool, tokenName, tokenSymbol, proxyRegistryAddress, {gas: 5000000});
  
};