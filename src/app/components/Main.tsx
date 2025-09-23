import React from "react";
import Intro from "./Intro";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Link from "next/link";
import { Github, Instagram, Twitter } from "lucide-react";
import { LiaDiscord } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";

const Main = () => {
  return (
    <div className="main">
      <Intro />
      <Experiences />
      <Projects />
      <footer className="footer">
        <Link href="https://instagram.com/nexon.codes/" target="_blank">
          <Instagram color="#E4405F " />
        </Link>
        <Link href="https://x.com/nexon_codes/" target="_blank">
          <Twitter color="#1DA1F2 " />
        </Link>
        <Link
          href="https://discord.com/users/channels1298910554517147670/"
          target="_blank"
        >
          <LiaDiscord color="#5865F2" size={27} />
        </Link>
        <Link
          href="https://linkedin.com/in/joseph-lamidi-9b83a4286/"
          target="_blank"
        >
          <CiLinkedin color="#0077B5" size={27} />
        </Link>
        <Link href="https://github.com/Jaycode01" target="_blank">
          <Github color="#24292e" />
        </Link>
      </footer>
    </div>
  );
};

export default Main;
