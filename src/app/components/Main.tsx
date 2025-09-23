import React from "react";
import Intro from "./Intro";
import Experiences from "./Experiences";
import ProjectsData from "../data/projects.json";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const Main = () => {
  return (
    <div className="main">
      <Intro />
      <Experiences />
      <section className="projects">
        {ProjectsData.projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="head">
              <h3 className="name">{project.name}</h3>
              <Link href={project.url} className="project-url">
                <ArrowUpRight />
              </Link>
            </div>
            <p className="description">{project.description}</p>
            <div className="stack">
              {project.stack.map((projectStack, index) => (
                <p className="project-stack" key={index}>
                  {projectStack}
                </p>
              ))}
            </div>
          </div>
        ))}
        <Link href="https://github.com/Jaycode01" className="see-more">
          See More <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
};

export default Main;
