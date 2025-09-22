import React from "react";
import Intro from "./Intro";
import ExperiencesData from "../data/experiences.json";
import { Dot } from "lucide-react";

const Main = () => {
  return (
    <div className="main">
      <Intro />
      <section className="experiences">
        {ExperiencesData.experiences.map((experience, index) => (
          <div className="experience" key={index}>
            <p className="period">{experience.period}</p>
            <div className="experience-details">
              <div className="role-and-org">
                <p className="role">{experience.role}</p>
                <Dot />
                <p className="organization">{experience.company}</p>
              </div>
              <p className="description">{experience.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Main;
