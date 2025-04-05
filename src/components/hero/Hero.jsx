import React, { useState } from "react";
import { Modal, ModalBody, Row } from "reactstrap";
import "./Hero.css";
import { useEffect } from "react";

const Hero = ({state}) => {
  const [modal, setModal] = useState(false);

  const [data, setData] = useState({ resume: "", desc: "", image: "" });
    useEffect(() => {
      
      const { contract } = state;
      console.log(contract)
      console.log(state)
      const fetchData = async () => {
        const image = await contract.methods.imageLink().call();
        const desc = await contract.methods.description().call();
        const resume = await contract.methods.resumeLink().call();
        
        setData({ resume: resume, desc: desc, image: image });
      }
  
      contract && fetchData();
      
    },[state])

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <p>
            <span>Apoorva</span> &nbsp; is a Full-Stack Blockchain Developer From
            India.
          </p>
          <h1>I develop decentralised apps in web3 space.</h1>
          <h3>{data.desc}</h3>
          {/*  =========popup bootstrap==========  */}

          <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
            <ModalBody>
              <Row className="text-align">
                <label htmlFor="" toggle={() => setModal(!modal)}>
                  Mail Id - appuwork11@gmail.com
                </label>
              </Row>
            </ModalBody>
          </Modal>

          <button className="msg-btn" onClick={() => setModal(true)}>
            Get in Touch
          </button>
          {/*  =========popup bootstrap end==========  */}
        </div>
        <div className="hero-img">
          <div className="img-container">
            <img
              src={`https://gateway.pinata.cloud/ipfs/${data.image}`}
              alt="profilePhoto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
