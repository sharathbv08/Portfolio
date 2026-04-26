import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    name: "REME — Mental Wellness Counselling App",
    description:
      "Designed a safe and structured mental wellness platform enabling students to express, reflect, and seek help through guided conversations, counselling flows, and anonymous support.",
    tags: ["UX Design", "User Research", "Interaction Design"],
    image: "/images/reme.png",
    link: "https://www.behance.net/gallery/238710231/REME-Mental-wellness-counselling-app",
  },
  {
    name: "SEVAK — Digitally Enhanced Porter Service",
    description:
      "Redesigned the railway porter service experience to improve accessibility, booking efficiency, and reduce passenger friction during high-pressure travel situations.",
    tags: ["Service Design", "UX Strategy", "User Flow"],
    image: "/images/sevak.png",
    link: "https://www.behance.net/gallery/238676481/SEVAK-Digitally-enhanced-porter-service-system",
  },
  {
    name: "ProSecure — Safety & Monitoring Platform",
    description:
      "Designed a digital solution focused on enhancing security monitoring, improving situational awareness, and enabling faster response through intuitive dashboards.",
    tags: ["Dashboard Design", "UX/UI", "Problem Solving"],
    image: "/images/prosecure.png",
    link: "https://www.behance.net/gallery/235714553/Pro-secure",
  },
  {
    name: "Urban Bloom — Smart Plant Care Experience",
    description:
      "Created a user-friendly plant care system that simplifies maintenance, tracking, and engagement, making urban gardening more accessible and intuitive.",
    tags: ["Product Design", "UX Design", "User Experience"],
    image: "/urbanbloom.png",
    link: "https://www.behance.net/gallery/235689193/Urban-bloom",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);
  
const project = projects[currentIndex];
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
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

          {/* LEFT SIDE — TEXT */}
          <div className="carousel-info">
            <div className="carousel-number">
              <h3>0{index + 1}</h3>
            </div>

            <div className="carousel-details">
              <h4>{project.name}</h4>

              <p className="carousel-category">
                {project.description}
              </p>

              <div className="carousel-tools">
                <span className="tools-label">Skills</span>
                <p>{project.tags.join(", ")}</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="carousel-image-wrapper">
            <WorkImage
              image={project.image}
              alt={project.name}
              link={project.link}
            />
          </div>

        </div>
      </div>
    ))}
  </div>
  <div className="carousel-dots">
  {projects.map((_, index) => (
    <button
      key={index}
      className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
      onClick={() => goToSlide(index)}
    />
  ))}
</div>
</div>
 </div>
</div>
</div>

);
};

export default Work;
