import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/ar-sharath-bv-b41961257/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Ar.Sharath Bv
              </a>
            </p>
            <h4>Education</h4>
            <p>
              User Experience Design (M.Des), RV University, Bengaluru — 2024–2026
            </p>
            <p>
              B.Arch Architecture, Reva University —
              2019–2024
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            
            
            <a
              href="https://www.linkedin.com/in/ar-sharath-bv-b41961257/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.behance.net/sharathbv"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Behance <MdArrowOutward />
            </a>
            <a
             
            >
              
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sharath Bv</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
