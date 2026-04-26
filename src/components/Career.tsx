import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Designer</h4>
                <h5>Navriti Technologies</h5>
              </div>
              <h3 className="career-year">Now</h3>
            </div>
            <p>
              Led the end-to-end design of core product features, delivering over 35+ screens including
              userflow, wireframes, and high fidelity prototypes. Simplified complex workflow by
              restructuring information architecture, improving navigation clarity during internal
              testing. Collaborated closely with developers and product managers to ensure a smooth
              design-to-development handoff, reducing iteration cycles and improving overall efficiency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UX Designer</h4>
                <h5>Galamine AI</h5>
              </div>
              <h3 className="career-year">05/2025–12/2025</h3>
            </div>
            <p>
              Designed AI-powered dashboards and interface by translating complex techincal workflows
              into intuitive user experience. Enhanced usability of data-heavy screens through structured
              layouts and well-defined interaction patterns. Strengthened design consistency by developing
              reusable UI components and collaborating closely with developers to ensure accurate implementation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Design Consultant</h4>
                <h5>Freelance </h5>
              </div>
              <h3 className="career-year">01/2025–05/2025</h3>
            </div>
            <p>
              Delivered end-to-end UX solutions for multiple client projects, spanning user research, 
              wireframing, and high-fidelity design. Designed responsive web interfaces focused on 
              usability, clarity, and seamless user flows. Managed parallel projects efficiently, 
              integrating user feedback into iterative design improvements to enhance overall product experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Architectural Intern</h4>
                <h5>VA Group</h5>
              </div>
              <h3 className="career-year">2023–2024</h3>
            </div>
            <p>
              Assisted in developing spatial layouts, floor plans, and architectural documentation
          across ongoing projects. Contributed to 3D modeling and presentation workflows,
              nsuring clarity in design communication. Built a strong foundation in structured 
              problem-solving and user-centered spatial design, shaping a systematic approach
              that translates into my UX design practice.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
