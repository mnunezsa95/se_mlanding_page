import PropTypes from "prop-types";
import { useState } from "react";
import "./Carousel.css";

const Carousel = ({ items, visibleItemsCount = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const len = items.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleItemsCount) % len);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - visibleItemsCount;
      return newIndex < 0 ? len - (-newIndex % len) : newIndex;
    });
  };

  const getVisibleItems = () => {
    let visibleItems = [];
    for (let i = 0; i < visibleItemsCount; i++) {
      visibleItems.push(items[(currentIndex + i) % len]);
    }
    return visibleItems;
  };

  return (
    <section className="carousel">
      <h2 className="carousel__title">
        Don&apos;t take our word for it, see what our customers have to say!
      </h2>
      <div className="carousel__container">
        <div className="carousel__track">
          {getVisibleItems().map((item, index) => (
            <div key={index} className="carousel__slide">
              <p className="carousel__slide-text">{item.description}</p>
              <div className="carousel__slide-person-info">
                <img src={item.imageUrl} alt={item.title} />
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel__buttons">
        <button onClick={prevSlide} className="carousel__control prev">
          &#9664;
        </button>
        <button onClick={nextSlide} className="carousel__control next">
          &#9654;
        </button>
      </div>
    </section>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      imageUrl: PropTypes.string,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  visibleItemsCount: PropTypes.number,
};

export default Carousel;
