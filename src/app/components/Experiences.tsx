import React from "react";
import ExperiencesData from "../data/experiences.json";
import { Calendar, Dot } from "lucide-react";

const Experiences = () => {
  return (
    <section className="experiences">
      {ExperiencesData.experiences.map((experience, index) => (
        <div className="experience" key={index}>
          <p className="period">
            <Calendar className="calendar-icon" />
            <span>{experience.period}</span>
          </p>
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
  );
};

export default Experiences;
