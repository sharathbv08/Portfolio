import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    name: "REME",
    description:
      "Mental Wellness Counselling App",
    tags: ["UX Design", "User Research", "Interaction Design"],
    image: "/images/reme.png",
    link: "https://www.behance.net/gallery/238710231/REME-Mental-wellness-counselling-app",
  },
  {
    name: "SEVAK",
    description:
      "Digitally Enhanced Porter Service",
    tags: ["Service Design", "UX Strategy", "User Flow"],
    image: "/images/sevak.png",
    link: "https://www.behance.net/gallery/238676481/SEVAK-Digitally-enhanced-porter-service-system",
  },
  {
    name: "ProSecure",
    description:
      "Safety & Monitoring Pltform",
    tags: ["Dashboard Design", "UX/UI", "Problem Solving"],
    image: "/images/prosecure.png",
    link: "https://www.behance.net/gallery/235714553/Pro-secure",
  },
  {
    name: "Urban Bloom",
    description:
      "Smart Plant Care Experience",
    tags: ["Product Design", "UX Design", "User Experience"],
    image: "/images/urbanbloom.png",
    link: "https://www.behance.net/gallery/235689193/Urban-bloom",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);

  const goPrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );

  return (
    <section className="work-section" id="work">
      <h2 className="title">
        My <span>Work</span>
      </h2>

      <div className="carousel-wrapper">

        {/* LEFT ARROW */}
        <button className="arrow left" onClick={goPrev}>←</button>

        {/* RIGHT ARROW */}
        <button className="arrow right" onClick={goNext}>→</button>

        <div className="carousel-track-container">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div className="carousel-slide" key={index}>
                <div className="carousel-content">

                  {/* LEFT */}
                  <div className="carousel-info">
                    <h1 className="number">
                      {String(index + 1).padStart(2, "0")}
                    </h1>

                    <h2 className="project-name">{project.name}</h2>

                    <p className="project-desc">
                      {project.description}
                    </p>

                    <div className="project-tools">
                      <span>TOOLS & FEATURES</span>
                      <p>{project.tags.join(", ")}</p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="carousel-image-wrapper"
>
  <img src={project.image} alt={project.name} />
</a>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="dots">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;