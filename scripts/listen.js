const GAME_ADDRESS = '0xB2197e832b16296F39e9B29Ca79a91620D58c739';

async function main() {
  const game = await hre.ethers.getContractAt('IGame', GAME_ADDRESS);

  game.on('Winner', (addr) => {
    console.log(addr + ' won!');
  });
}

main();
