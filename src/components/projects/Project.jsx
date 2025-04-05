import React, { useEffect, useState } from "react";
import { FaDonate } from "react-icons/fa";
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap";
import "./Project.css";

const Projects = ({ state }) => {
  const [modal, setModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const { contract } = state;
    const projectDetails = async () => {
      try {
        const project = await contract.methods.allProjects().call();
        console.log(project);
        setProjects(project);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    contract && projectDetails();
  }, [state]);

  const handleDonate = async (e) => {
    e.preventDefault();
    const { contract, web3, account } = state;
    try {
      const weiAmount = web3.utils.toWei(amount, "ether");
      await contract.methods.donate().send({
        from: account,
        value: weiAmount,
      });
      alert("Donation successful!");
      setModal(false);
      setAmount(""); // reset input
    } catch (err) {
      console.error("Donation failed:", err);
      alert("Donation failed. Check console for details.");
    }
  };

  return (
    <section className="project-section">
      <h1 className="title">Projects</h1>
      <div className="card-wrapper">
        {projects.length > 0 &&
          projects.map((project, index) => (
            <a
              key={index}
              href={`https://github.com/appusrivastva/${project.githubLink}`}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-img">
                <img
                  src={`https://gateway.pinata.cloud/ipfs/${project.image}`}
                  alt={project.name}
                />
              </div>
              <div className="card-text">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
      </div>

      {/* Modal for donation */}
      <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          Enter the ETH you want to donate!
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleDonate}>
            <Row>
              <input
                id="eth"
                type="text"
                placeholder="Enter ETH amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <Button className="mt-4" type="submit">
                Send
              </Button>
            </Row>
          </form>
        </ModalBody>
      </Modal>

      <p className="donate" onClick={() => setModal(true)}>
        Liked the projects? Consider donating ETH <FaDonate className="icon" />
      </p>
    </section>
  );
};

export default Projects;
