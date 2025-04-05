import { SlCalender } from "react-icons/sl";
import "./Experience.css";
import { useState, useEffect } from "react";

const Experience = ({ state }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const { contract } = state;
    const fetchData = async () => {
      const educations = await contract.methods.allEducation().call();
      setData(educations);
    };
    if (contract) fetchData();
  }, [state]);

  return (
    <section className="exp-section wrapper">
      <h1 className="title">Experience & Education</h1>

      <div className="container">
        <div className="education">
          <h1 className="edu-tittle">Education</h1>
          {data.length > 0 ? (
            data.map((education, index) => (
              <div className="edu-card" key={index}>
                <p className="card-text1">
                  <SlCalender className="icon" /> {education.date}
                </p>
                <h3 className="card-text2">{education.degree}</h3>
                <p className="card-text3">{education.knowledgegetAcquired}</p>
                <p className="card-text4">{education.institueName}</p>
              </div>
            ))
          ) : (
            <p className="fallback-text">No education data found.</p>
          )}
        </div>

        <div className="education">
          <h1 className="edu-tittle">Experience</h1>

          {/* You can move this data to an array too for cleaner code if needed */}
          {[
            {
              date: "July 2024 - May 2024",
              role: "Industrial Training - MERN Stack",
              desc: "Completed a 6-month industrial training focused on the MERN stack...",
              org: "Apoorva",
            },
            {
              date: "July 2024 - Nov 2024",
              role: "Online Internship - MERN Stack",
              desc: "Worked remotely on real-time web development projects using the MERN stack...",
              org: "Apoorva",
            },
            {
              date: "March 2025 - Present",
              role: "Blockchain Developer Intern",
              desc: "Gained hands-on experience in developing decentralized applications...",
              org: "Apoorva",
            },
          ].map((exp, index) => (
            <div className="edu-card" key={index}>
              <p className="card-text1">
                <SlCalender className="icon" /> {exp.date}
              </p>
              <h3 className="card-text2">{exp.role}</h3>
              <p className="card-text3">{exp.desc}</p>
              <p className="card-text4">{exp.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
