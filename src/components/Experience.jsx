import "./Experience.css";
import "./fonts.css";

export default function Experience() {
  return (
    <div className="experience">
      <div className="experience-one">
        <h2>Professional Experience</h2>
        <h3>
          Software Developer | Independent Projects & Consulting | Sep 2022 -
          Present
        </h3>
        <ul>
          <li>
            - Developed and maintained full-stack web applications using modern
            JavaScript frameworks
          </li>
          <li>
            - Collaborated with 10+ clients to deliver custom software solutions
            on time and within budget
          </li>
          <li>
            - Built responsive, accessible interfaces following industry best
            practices
          </li>
        </ul>
        <h4>Key Projects:</h4>
        <ul>
          <li>
            → E-commerce Platform: Web application with wide-range registered
            users
          </li>
          <li>
            → Task Management System: React.js application with real-time tasks
            management system
          </li>
          <li>
            → Portfolio Website: Next.js site with CMS integration and analytics
          </li>
          <li>
            → Developers Collaboration Platform: Next.Js + TailwindCSS + Node.Js
            web application
          </li>
          <li>
            → Real Estate Platform: HTML + CSS + PHP + JavaScript platform for
            real estate service
          </li>
        </ul>
        <p className="technologies">
          <b>Technologies</b>: HTML + CSS, JavaScript, TypeScript, React,
          Next.Js, Node.js, Express, Firebase + Firestore, Node Mailer,
          TailwindCSS, Git
        </p>
      </div>
      <div className="experience-two">
        <h3>Freelance Web Developer | Various Clients | Dec 2024 - Present</h3>
        <ul>
          <li>
            - Successfully delivered 8 client projects ranging from landing
            pages to web applications
          </li>
          <li>
            - Managed complete project lifecycle from requirements gathering to
            deployment
          </li>
          <li>
            - Established efficient project workflows reducing average delivery
            time while maintaining quality standards
          </li>
        </ul>
        <h4>Clients Solutios & Impacts:</h4>
        <ul>
          <li>
            → Real Estate Agency: Developed property listing platform with
            search/filter functionality serving 500+ monthly visitors
          </li>
          <li>
            → Small Business Portfolio Sites: Delivered 6 professional websites
            resulting in average increase in client inquiries
          </li>
          <li>
            → Local Restaurant Chain: Built responsive website with online
            ordering system, increasing online orders
          </li>
        </ul>
      </div>
      <div className="experience-three">
        <h3>Active Member | Hack Club | June 2025- Present</h3>
        <ul>
          <li>
            - Member of the world's largest online community of teenage
            developers (70,000+ members globally)
          </li>
          <li>
            - Engaged in peer programming sessions and technical workshops to
            advance coding skills
          </li>
          <li>
            - Engage with international developer community through Slack
            channels and online forums
          </li>
          <li>- Access to exclusive resources</li>
        </ul>
      </div>
    </div>
  );
}
