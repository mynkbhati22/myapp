import React from "react";

export default function Web3({
  account,
  Disconnect,
  MetamaskLogin,
  WalletConnectLogin,
}) {
  var Web3 = require("web3");
  var web3 = new Web3("https://eth-mainnet.alchemyapi.io/v2/your-api-key");
  console.log("consoling web3.js :", web3);

  // FOR SLICING ACCOUNT

  return (
    <div>
      <div className="container my-5 text-center">
        <h1 className="text-bold my-4">Please Connect Your Wallet</h1>
      </div>

      <div className="container">
        <div className="wallet-img d-flex justify-content-center align-items-center">
          <img
            src="https://imgs.search.brave.com/ncwr7sjYuMV14G4QXjJJQYTTRPD03Agf_hOhXc4tGjA/rs:fit:1538:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/R1dNVTFaXzNlTWlP/NzRodl9tZ2pBSGFD/UyZwaWQ9QXBp"
            alt="metamask-img"
          />{" "}
          <img
            src="https://imgs.search.brave.com/ltJ--8X0WMI_EG_pcDLC-7c07vSM0kRj35GzCep8d6o/rs:fit:1200:675:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcG9seWdv/bnRpbWVzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/Ny9waG90b18yMDIx/LTA3LTEzLTE2LjI3/LjI1LmpwZWc_Zml0/PTEyMDAlMkM2NzUm/c3NsPTE"
            alt="walletconnect-img"
          />
        </div>
        <div className="container">
          {account ? (
            <>
              <p>
                Your Wallet Address :{" "}
                {account ? account : "0xxxx0000000000000000000000000000000000"}
              </p>
              <p>
                Your Account Balance :{" "}
                {account ? account : "0xxxx0000000000000000000000000000000000"}
              </p>
            </>
          ) : (
            "Connect WALLET WITH METAMASK"
          )}
        </div>
      </div>
    </div>
  );
}
