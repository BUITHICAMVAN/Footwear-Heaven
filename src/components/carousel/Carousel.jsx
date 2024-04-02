import React from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Carousel = (props) => {
  const productCarousel = props.arrProduct.slice(0, 3);
  const navigate = useNavigate();
  const handleToDetails = (index) => {
    navigate(`/detail/${index}`);
    // history.push(`/product/${index}`);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % productCarousel.length;
    setCurrentIndex(nextIndex);
    // Thực hiện bất kỳ xử lý nào cần thiết với index mới
  };

  const handlePrevious = () => {
    const previousIndex =
      (currentIndex - 1 + productCarousel.length) % productCarousel.length;
    setCurrentIndex(previousIndex);
    // Thực hiện bất kỳ xử lý nào cần thiết với index mới
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 ">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner container-fluid ">
              {productCarousel.map((prod, index) => {
                return (
                  <div
                    key={prod.id}
                    className={`carousel-item ${
                      index === 0 ? "active" : ""
                    } carousel-custom`}
                  >
                    <img src={prod.image} className="d-block" alt="..." />
                  </div>
                );
              })}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
              onClick={() => {
                handlePrevious();
              }}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
              onClick={handleNext}
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          {productCarousel.map((prod, index) => {
            return (
              <div key={index}>
                {index === 0 && (
                  <div className="">
                    <h3>{prod.name}</h3>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        handleToDetails(currentIndex+1);
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
