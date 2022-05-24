
const GAME_ADDRESS = '0x5cFd6B40ea7a8FbcBa5cb85C3cf101Ad85310B7A';

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
