import { useEffect, useState } from "react";
import "./Contact.css";

const Contact = ({ state }) => {
  const [link, setLink] = useState("");

  useEffect(() => {
    const { contract } = state;
    const fetchData = async () => {
      const resume = await contract.methods.resumeLink().call();
      setLink(resume);
      console.log(resume);
    };
    contract && fetchData();
  });
  return (
    <section className="contact-section wrapper">
      <h1 className="title">Interested? Let's Get In Touch!</h1>
      <a
        href={`https://gateway.pinata.cloud/ipfs/${link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="downlodeBTN">View Resume</button>
      </a>
    </section>
  );
};

export default Contact;
