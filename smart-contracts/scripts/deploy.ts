
import hre from "hardhat"
require("@nomiclabs/hardhat-etherscan");

async function sleep(ms: number | undefined) {
  return new Promise<void>((resolve : (value: void | PromiseLike<void>) => void) => {
    setTimeout(() => resolve(), ms);
  })
}
async function main() {
  //  const initialAmount = hre.ethers.utils.parseEther("0.0001")
  const CoinFlip= await hre.ethers.getContractFactory("CoinFlip");

  // Start deployment, returning a promise that resolves to a contract object
  const coinFlip = await CoinFlip.deploy();   

  await coinFlip.deployed();
  console.log("Contract deployed to address:", coinFlip.address);

  await sleep(45 * 1000)
  await hre.run("verify:verify", {
    address: coinFlip.address,
    constructorArguments : []
  })

   //  const initialAmount = hre.ethers.utils.parseEther("0.0001")
   const Dice= await hre.ethers.getContractFactory("Dice");

   // Start deployment, returning a promise that resolves to a contract object
   const dice = await Dice.deploy();   
 
   await dice.deployed();
   console.log("Contract deployed to address:", dice.address);
 
   await sleep(45 * 1000)
   await hre.run("verify:verify", {
     address: dice.address,
     constructorArguments : []
   })

   const Wheel= await hre.ethers.getContractFactory("Wheel");

   // Start deployment, returning a promise that resolves to a contract object
   const wheel = await Wheel.deploy();   
 
   await wheel.deployed();
   console.log("Contract deployed to address:", wheel.address);
 
   await sleep(45 * 1000)
   await hre.run("verify:verify", {
     address: wheel.address,
     constructorArguments : []
   })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
