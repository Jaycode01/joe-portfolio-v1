import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-section">
      <div className="profile">
        <div className="profile-pic-bg">
          <img src="nexon.png" alt="" />
        </div>
        <div className="profile-text-container">
          <h1 className="name">Joseph Lamidi</h1>
          <p className="role">Software Engineer</p>
          <div className="social-handles">
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
          </div>
        </div>
      </div>
      <div className="overview">
        <p>
          <span>4</span>
          <span>Years of work experience</span>
        </p>
        <p>
          <span>50+</span>
          <span>Completed projects</span>
        </p>
        <p>
          <span>20+</span>
          <span>Satisfied customers</span>
        </p>
      </div>
      <div className="cta">
        <button className="download-cv" type="button">
          <span>Download CV</span>
          <img src="download.svg" alt="" />
        </button>
        <a className="contact" href="mailto:josephlamidijoslam@gmail.com">
          Contact Me
        </a>
      </div>
    </div>
  );
}
