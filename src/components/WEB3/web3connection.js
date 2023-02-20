import Web3 from "web3/dist/web3.min.js";
import WalletConnectProvider from "@walletconnect/web3-provider/dist/umd/index.min.js";

let web3;

var provider = new WalletConnectProvider({
  rpc: {
    56: "https://bsc-dataseed1.ninicoin.io",
    97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    1: "https://mainnet.infura.io/v3/6e1530cd10fb4631a54c14a5f07b25a6",
  },
  bridge: "https://bridge.walletconnect.org",
});

export const LoginWithWalletConnect = async () => {
  try {
    await provider.disconnect();
    await provider.enable();
    web3 = new Web3(provider);
    console.log(web3);
  } catch (error) {
    console.log(error);
  }
};

// export const eth_provider =async()=>{
//   return web3
// }

export const DisconnectWallet = async () => {
  await provider.disconnect();
  web3 = null;
};

export const LoginWithMetamask = async () => {
  const loginwithmetamask = await window.ethereum.enable();
  web3 = new Web3(window.ethereum);
  console.log("loginwithmetamask : ", loginwithmetamask);
  return loginwithmetamask[0];
};

export const getUserAddress = async () => {
  try {
    const address = await web3.eth.getAccounts();
    return address[0];
  } catch (error) {
    console.log(error);
  }
};
export const towie = async (amount) => {
  try {
    const number = await web3.utils.toWei(amount.toString(), "ether");
    return number;
  } catch (error) {
    console.log(error);
  }
};

export const GetChainId = async () => {
  try {
    const id = await web3.eth.getChainId();
    return id;
  } catch (error) {
    console.log(error);
  }
};
