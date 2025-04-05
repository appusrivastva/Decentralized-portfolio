import Hero from "./components/hero/Hero";
import Wallet from "./components/Wallet/Wallet";
import Handles from "./components/handles/Handles";
import Projects from "./components/projects/Project";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./index.css";
import { useState } from "react";
import Experience from "./components/experience/Experience";
function App() {
  const [state, setState] = useState({
    web: null,
    contract: null,
    account:null,
  });

  const saveState = (state) => {
    console.log(state);
    setState(state);
  };
  return (
    <>
      <Wallet saveState={saveState}></Wallet>
      <Hero state={state} />
      <Handles />
      <Projects state={state} />
      <Skills />
      <Experience state={state} />

      <Contact state={state} />

      <Handles />
    </>
  );
}

export default App;
