import "./ProgramCarousel.css";
import ProgramModal from "./ProgramModal";
import { useState } from "react";
import cardioImage from "../../../public/images/cardio.svg";
import martialArtsImage from "../../../public/images/martial-arts.svg";
import selfDefenseImage from "../../../public/images/self-defense.svg";
import weightBarImage from "../../../public/images/weight-bar.svg";

const programs = [
  {
    title: "Cardio Training",
    description:
      "Fitness training that you'll enjoy and results you'll love even more",
    picture: cardioImage,
    videoUrl: "/videos/jump-roping.mp4",
  },
  {
    title: "Martial Arts",
    description:
      "Boxing, kickboxing, grappling and more to help you get fit and learn",
    picture: martialArtsImage,
    videoUrl: "/videos/martial-arts.mp4",
  },
  {
    title: "Self Defense",
    description:
      "A short description of the service and how the visitor will benefit from it.",
    picture: selfDefenseImage,
    videoUrl: "/videos/self-defense.mp4",
  },
  {
    title: "Weight Training",
    description:
      "A short description of the service and how the visitor will benefit from it.",
    picture: weightBarImage,
    videoUrl: "/videos/training-session.mp4",
  },
];

const ProgramCarousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleButtonClick = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  return (
    <section className="program-container">
      <h2 className="program-title">Custom Programs for your Goals</h2>
      <div className="program-grid">
        {programs.map((program, index) => (
          <div key={index} className="program-item">
            <h3 className="program-item-title">{program.title}</h3>
            <p className="program-item-text">{program.description}</p>
            {program.picture ? (
              <img
                src={program.picture}
                alt={program.title}
                className="program-image"
              />
            ) : (
              <div className="program-placeholder-image">
                No image available
              </div>
            )}
            <button
              className="program-video-button"
              onClick={() => handleButtonClick(program)}
            >
              Click here to see a short video
            </button>
          </div>
        ))}
      </div>
      <ProgramModal
        isOpen={isModalOpen}
        onClose={closeModal}
        program={selectedProgram}
      />
    </section>
  );
};

export default ProgramCarousel;
