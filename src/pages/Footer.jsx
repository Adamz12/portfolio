import React from "react";
import FooterLogo from "../assets/footer-logo.svg";
import { MdOutlineArrowUpward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <a href="#" className="footer__logo">
        {/* <img src={FooterLogo} alt="" /> */}
        <span className="footer__scroll-top">
          Top <MdOutlineArrowUpward />
        </span>
      </a>
      <div className="footer__link--wrapper">
        <div>
          <a target="_blank" href="https://github.com/Adamz12">
            Github
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/adam-zain-62875428b/"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a href="mailto:adamzain047@gmail.com">Email</a>
        </div>
        <div>
          <a target="_blank" href="/Software-CV_1.pdf">
            Resume
          </a>
        </div>
      </div>
      <div>Copyright &copy; 2023 Adam Zain</div>
    </div>
  );
};

export default Footer;
