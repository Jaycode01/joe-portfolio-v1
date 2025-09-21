import React from "react";
import Image from "next/image";
import NexonDp from "../../../public/images/nexon-dp.jpeg";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function Intro() {
  return (
    <div className="intro">
      <div className="profile">
        <Image src={NexonDp} alt="nexon profile picture" className="dp" />
        <div>
          <h1 className="name">
            Nexon <RiVerifiedBadgeFill color="#1da1f2" size={22} />
          </h1>
          <p className="role">
            Web Engineer | UI Design & Conversion Optimization
          </p>
        </div>
      </div>
      {/* My bio - ABout me in short line */}

      <p className="bio">
        I'm a Web Engineer with over 3 years of experience specializing in
        building easy-to-use, conversion-driven interface. I develop web
        solutions for businesses, organization, and companies that turn browsers
        into cutomers. I craft web applications that are as technically sound as
        they are visually compelling. When I'm not coding, I workout and watch
        boxing to clear my head.
      </p>
    </div>
  );
}
