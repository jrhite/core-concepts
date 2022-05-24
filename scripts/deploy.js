
//
// The magical `hre` variable. 
// 
// Where does it come from?
//
// When we run scripts using `npx hardhat run scripts/script_name.js` we are invoking the
// hardhat environment and any script run this way will have access to the hre variable
//

const mySecretNumber = 13;

async function main() {
  //
  // Hardhat is doing a ton of things for us!
  //
  // Using only the contract name 'Game4' Hardhat
  //   1. Grabs the ABI from the artifacts directory
  //   2. Grabs the bytecode fron the artifacts directory
  //   3. Attaches a signer to the factory which will be the account that will sign
  //      and spend ETH when deploying the contract. The default signer is the first
  //      signer returned by ethers.getSigners()
  //
  const Game = await hre.ethers.getContractFactory('Game4');

  // Using the 3 pieces of information above we deploy the contract to 
  // the local blockchain. After deployment we have a contract instance
  // with the address it has been deployed to. Additionally the contract
  // instance has a signer connected to the it.
  const game = await Game.deploy(mySecretNumber);
  await game.deployed();

  console.log(`Game deployed to address: `, game.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });