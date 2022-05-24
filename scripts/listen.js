const GAME_ADDRESS = '0x5cFd6B40ea7a8FbcBa5cb85C3cf101Ad85310B7A';

async function main() {
  const game = await hre.ethers.getContractAt('IGame', GAME_ADDRESS);

  game.on('Winner', (addr) => {
    console.log(addr + ' won!');
  });
}

main();
