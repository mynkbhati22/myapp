import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Testpage from "./components/pages/Testpage";
import Web3 from "./components/pages/web3";
import {
  DisconnectWallet,
  GetChainId,
  getUserAddress,
  LoginWithMetamask,
  LoginWithWalletConnect,
} from "./components/WEB3/web3connection";
import RegistrationForm from "./components/RegistrationForm";
import SetState from "./components/SetState";
import State from "./components/State";
import Features from "./components/Features";
import Main from "./components/Main";
import Revision from "./components/Revision";
import Contact from "./components/Contact";

export default function App() {
  let url = window.URL;
  url = "https://bkhnak.deta.dev";
  console.log("gettingapiurl", url);

  const [account, setAccount] = useState();

  useEffect(() => {
    const init = async () => {
      const wallet = window.localStorage.getItem("wallet");
      if (wallet) {
        await MetamaskLogin();
      }

      const id = await GetChainId();
      console.log(id);
    };
    init();
  }, []);

  // FOR DISCONNECT

  const Disconnect = async () => {
    try {
      await DisconnectWallet();
      setAccount(undefined);
      window.localStorage.removeItem("wallet");
    } catch (error) {
      console.log("error while DC : ", error);
    }
  };

  // FOR META MASK

  const MetamaskLogin = async () => {
    try {
      await LoginWithMetamask();
      const add = await getUserAddress();
      window.localStorage.setItem("wallet", "wallet");
      setAccount(add);
    } catch (error) {
      console.log("something wrong while Metamask : ", error);
    }
  };

  // FOR WALLET CONNECT

  const WalletConnectLogin = async () => {
    try {
      await LoginWithWalletConnect();
      const add = await getUserAddress();
      setAccount(add);
    } catch (error) {
      console.log("error while wallectconnect :", error);
    }
  };

  try {
    window.ethereum.on("accountsChanged", function (accounts) {
      setAccount(accounts[0]);
    });
  } catch (error) {}

  try {
    window.ethereum.on("chainChanged", function () {
      window.location.reload();
    });
  } catch (error) {}

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home url={url} />} />
          {/* <Route
            path="/web3"
            element={
              <Web3
                account={account}
                Disconnect={Disconnect}
                MetamaskLogin={MetamaskLogin}
                WalletConnectLogin={WalletConnectLogin}
              />
            }
          />
          <Route
            path="/testing/:locationame"
            element={<Testpage url={url} />}
          /> */}
        </Routes>

        {/* <Features />
        <Main />
        <State /> */}
        <SetState />
        {/* <RegistrationForm />
        <Revision /> */}
        {/* <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </Router>
    </div>
  );
}
