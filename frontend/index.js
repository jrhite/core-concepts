import { ethers } from 'ethers';
import Game4Artifact from './artifacts/contracts/Game4.sol/Game4';

const GAME_ADDRESS = '0x5cFd6B40ea7a8FbcBa5cb85C3cf101Ad85310B7A';

(async function () {
  // get the injected EIP 1193 provider from MetaMask
  let provider = new ethers.providers.Web3Provider(window.ethereum);

  //
  // Make a JSON-RPC request to the MetaMask provider to do 2 things:
  //   1. Unlock MetaMask if it is currently locked
  //   2. Select which signer account for the MetaMask provider to use
  //
  await provider.send('eth_requestAccounts', []);

  let signer = await provider.getSigner();

  let game = new ethers.Contract(GAME_ADDRESS, Game4Artifact.abi, signer);

  // export variables for use in console
  window.GAME_ADDRESS = GAME_ADDRESS;
  window.ethers = ethers;
  window.provider = provider;
  window.signer = signer;
  window.game = game;
}());
