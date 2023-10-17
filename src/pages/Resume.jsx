import React from "react";
import Me from "../assets/Adam_crop.png";
import { FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { experienceConfig } from "../config/resume/experienceConfig";
import { technicalSkillsConfig } from "../config/resume/technicalSkillsConfig";
import { transferrableSkillsConfig } from "../config/resume/transferrableSkillsConfig";
import { AnimatedHeader } from "../components/AnimateHeader";

const Resume = () => {
  return (
    <div id="resume" className="container">
      <div
        className="projects__text-container"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <AnimatedHeader className={"projects__header"} headerText={"Resume"} />
      </div>
      <div className="resume__wrapper">
        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__image">
            <img src={Me} alt="" />
          </div>
          <div>
            <div className="resume__name playfair">Adam Zain</div>
            <div className="resume__title lato">Software Engineer</div>
            <div className="resume__contact--info">
              <div>
                <FaDownload />
                <a className="resume__link" href="/Software-CV_1.pdf" target="_blank">
                  Download resume
                </a>
              </div>
              <div>
                <MdEmail />
                <a className="resume__link" href="mailto:adamzain047@gmail.com">
                  Email
                </a>
              </div>
              <div>
                <AiFillLinkedin />
                <a
                  className="resume__link"
                  href="https://www.linkedin.com/in/adam-zain-62875428b/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </div>
            </div>
            <div>
              A highly motivated software engineer prepared to utilise
              exceptional software, problem-solving and communication skills to
              further my programming passion as a website developer.
            </div>
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Education</div>
          <div>
            <div className="resume__education--wrapper">
              <div className="resume__education">
                <div className="resume__job--name">
                  Frontend Simplified Bootcamp
                </div>
                <div>Web Application Development</div>
              </div>
              <div className="resume__job--date">March 2023 - Current</div>
            </div>
            <div className="resume__education--wrapper">
              <div className="resume__education">
                <div className="resume__job--name">
                  Liverpool John Moores University, UK
                </div>
                <div>
                  Bachelor of Business (Honours), Business Managemt Major
                  Diploma in International Business Management
                </div>
              </div>
              <div className="resume__job--date">2017 - 2020</div>
            </div>
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Experience</div>
          <div>
            <div className="resume__job--wrapper">
              <div className="resume__job">
                <div>
                  <div className="resume__job--name">Adam Zain</div>
                  <div className="resume__job--description">
                    Frontend Developer Internship
                  </div>
                </div>
                <div className="resume__job--date">
                  March 2023 - September 2023{" "}
                </div>
              </div>

              <ul className="resume__list-wrapper">
                <li>
                  Transformed a completely static HTML, CSS, JavaScript and
                  React single page application into an interactive user
                  interface using animations, transitions, and carousels
                </li>
                <li>
                  Processed API requests with Axios to dynamically represent
                  data from a cloud server and represented it through skeleton
                  loading states, pagination and dynamic routing
                </li>
                <li>
                  Utilized Git version control and the GitHub interface to work
                  and thrive in a virtual and collaborative team environment
                </li>
              </ul>
            </div>
            {/* <div className="resume__job--wrapper">
              <div className="resume__job">
                <div>
                  <div className="resume__job--name">Adam Zain</div>
                  <div className="resume__job--description">
                    Freelance Developer
                  </div>
                </div>
                <div className="resume__job--date">March 2023 - Current </div>
              </div>

              <ul className="resume__list-wrapper">
                <li>
                  Developed 5 professional websites utilizing HTML5, CSS3
                  (including SCSS and BEM methodology), JavaScript, and React
                  while adhering to industry best practices.
                </li>
                <li>
                  Implemented advanced techniques like image compression,
                  caching strategies, and lazy loading for images and components
                  to boost website performance and user experience.
                </li>
                <li>
                  Ensured comprehensive website features, including SEO
                  integration, responsive design, multi-platform compatibility,
                  and seamless hosting support, to guarantee accessibility and
                  functionality across diverse browsers and devices worldwide.
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Technical Skills</div>
          <div>
            <div>
              <ul className="resume__list-wrapper resume__skills--list-wrapper">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Firebase</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume__grid" data-aos="fade-up" data-aos-delay="500">
          <div className="resume__title--description">Transferrable Skills</div>
          <div>
            <div>
              <ul className="resume__list-wrapper resume__skills--list-wrapper">
                {transferrableSkillsConfig.map((transferrableSkills, index) => (
                  <li key={index}>{transferrableSkills}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="resume__grid resume__bottom"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="resume__title--description">References</div>
          <div>Available Upon request</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
