// to configure web3 with a provider from Metamask
import Web3 from "web3";
 
let web3; //variable
 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  //if we are in the browser and metamask is running (has injected an instance of web3)
  window.ethereum.request({ method: "eth_requestAccounts" }); //hijack metamask provider
  web3 = new Web3(window.ethereum); //use it to create own provider
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider( //set up own Infura provider, connect with Rinkeby through Infura
    "https://rinkeby.infura.io/v3/d87e797193d64f4f880ea3847e2b959d"
  );
  web3 = new Web3(provider);
}

export default web3;