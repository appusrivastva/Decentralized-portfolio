import React from "react";
import "./Skills.css";

import react from "../../assets/skills/react.svg";
import btc from "../../assets/skills/btc.png";
import eth from "../../assets/skills/eth.png";
import node from "../../assets/skills/node.svg";
import solidity from "../../assets/skills/solidity.png";
import express from "../../assets/skills/express.png";
import mongodb from "../../assets/skills/mongodb.png";
import github from "../../assets/skills/github.png";
import html from "../../assets/skills/html.png";
import java from "../../assets/skills/java.png";
import js from "../../assets/skills/js.png";
import tailwind from "../../assets/skills/tailwind.png";

const Skills = () => {
  return (
    <section className="skills-section">
      <img src={react} alt="react-icon" />
      <img src={btc} alt="btc-icon" />
      <img src={eth} alt="eth-icon" />
      <img src={node} alt="node-icon" />
      <img src={solidity} alt="solidity-icon" />
      <img src={express} alt="express-icon" />
      <img src={mongodb} alt="mongodb-icon" />
      <img src={github} alt="github-icon" />
      <img src={html} alt="html-icon" />
      <img src={java} alt="java-icon" />
      <img src={js} alt="js-icon" />
      <img src={tailwind} alt="tailwind-icon" />
    </section>
  );
};

export default Skills;
