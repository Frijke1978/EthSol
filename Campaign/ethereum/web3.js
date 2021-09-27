import Web3 from "web3";
 
let web3;
 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    // "https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c"
      "https://rinkeby.infura.io/v3/fe0ee19eb42149138ad910c8a0b317ef"
  );
  web3 = new Web3(provider);
}
 
export default web3;