import { SiGmail } from "react-icons/si";
import "./Profile.css";
import "./fonts.css";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-pic-bg">
        <img src="nexon.png" alt="" />
      </div>
      <div className="profile-text-container">
        <h1 className="name">Joseph Lamidi</h1>
        <p className="role">Software Engineer</p>
        <button className="contact-mail">
          <span>
            <SiGmail size={18} style={{ color: "#EA4335" }} />
          </span>
          <a
            href="mailto:josephlamidijoslam@gmail.com"
            className="contact-mail"
          >
            josephlamidijoslam@gmail.com
          </a>
        </button>
        {/* <div className="social-handles">
          <a href="https://github.com/Jaycode01">
            <img src="github.svg" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/joseph-lamidi-9b83a4286">
            <img src="linkedin.svg" alt="linkedin" />
          </a>
          <a href="https://x.com/nexon_codes">
            {" "}
            <img src="twitter.svg" alt="twitter" />
          </a>
          <a href="https://www.youtube.com/@nexon_codes">
            <img src="youtube.svg" alt="youtube" />
          </a>
        </div> */}
      </div>
    </div>
  );
}
