
const GAME_ADDRESS = '0xB2197e832b16296F39e9B29Ca79a91620D58c739';

async function main() {
  const game = await hre.ethers.getContractAt('Game4', GAME_ADDRESS);

  const hashedSlot = hre.ethers.utils.keccak256(
    hre.ethers.utils.toUtf8Bytes('secret.variable.slot')
  );

  const secretValue = await hre.ethers.provider.getStorageAt(GAME_ADDRESS, hashedSlot);
  
  const winTx = await game.win(hre.ethers.BigNumber.from(secretValue));
  const winTxReceipt = await winTx.wait();

  // console.log({ winTxReceipt });
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
