//import Web3 from "web3";
import { ethers } from "ethers";
import { ABI, vestingContractAddress } from "../config/vestingConfig";
// const web3 = new Web3(Web3.givenProvider);
// const accounts = web3.eth.getAccounts();
// const smartContract = new web3.eth.Contract(ABI, ContractAddress);
// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum);
// MetaMask requires requesting permission to connect users accounts
let accounts = await provider.send("eth_requestAccounts", []);
let account = accounts[0];
// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
window.ethereum.on('accountsChanged', function (accounts) {
    account = accounts[0];
});
const signer = provider.getSigner();
const address =  await signer.getAddress();
console.log("address", address);
const vestingContract = new ethers.Contract(vestingContractAddress, ABI, signer);
vestingContract.signer.getAddress().then((res) => {
    sessionStorage.setItem("WalletAddress",res)
    console.log("res wall", res)
});
export default vestingContract;
