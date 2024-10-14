import PropTypes from "prop-types";
import "./ProgramModal.css";
import closeButton from "../../../public/images/close-button.svg";

const ProgramModal = ({ isOpen, onClose, program }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          <img className="modal-close-image" src={closeButton} />
        </button>
        <h3 className="modal-title">{program.title}</h3>
        <p className="modal-text">{program.description}</p>
        {program.videoUrl && (
          <div className="modal-video-container">
            <video controls>
              <source src={program.videoUrl} type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

ProgramModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  program: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    videoUrl: PropTypes.string,
  }),
};

export default ProgramModal;
