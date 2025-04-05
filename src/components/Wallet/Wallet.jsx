import "./Wallet.css";
import { useState } from "react";
import ABI from "./ABI.json";
import Web3 from "web3";

const Wallet = ({ saveState }) => {
  const [connected, setConnected] = useState(true);
  const init = async () => {
    // object enject
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const contractAddress = import.meta.env.VITE_APP_CONTRACT_ADDRESS;
      console.log({ contractAddress });

      const account = await web3.eth.getAccounts();
      const contract = new web3.eth.Contract(ABI, contractAddress);
      setConnected(false);
      console.log(contract);
      saveState({ web3: web3, contract: contract, account: account[0] });
    } catch (error) {
      alert("Please install Metamask");
    }
  };
  return (
    <>
      <div className="header wrapper">
        {false && (
          <button className="connectBTN">
            <a href="https://metamask.app.link/dapp/sriche.netlify.app/">
              Click For Mobile
            </a>
          </button>
        )}
        <button className="connectBTN" disabled={!connected} onClick={init}>
          {connected ? "Connect Meta Mask" : "Connected"}
        </button>
      </div>
    </>
  );
};
export default Wallet;
