import React, { useState, useRef, useEffect } from "react";
// import TinderCard from '../react-tinder-card/index'
import "./card-swipe.scss";

function CardSwipe({ db }) {
  let lengthData = db.length - 1;
  const boxSliderRef = useRef(null);
  const slidesRef = useRef(null);
  const [widthBoxSlider, setWidthBoxSlider] = useState("");
  const dotsRef = useRef([]);

  let index = 0;
  dotsRef.current = new Array(lengthData);

  useEffect(() => {
    setWidthBoxSlider(boxSliderRef.current.clientWidth);
  }, []);

  const test = (index) => {
    dotsRef.current.forEach((e, i) => {
      e.classList.remove("background");
    });
    if (dotsRef.current[index]) {
      dotsRef.current[index].classList.add("background");
    }
  };
  return (
    <div className="container-slider">
      <div className="box-slider" ref={boxSliderRef}>
        <div className="container-dot">
          {db.map((item, i) => (
            <div
              ref={(el) => (dotsRef.current[i] = el)}
              key={i}
              className={i === index ? "btn-dot background" : "btn-dot"}
              style={{
                flexBasis: `calc(${100 / lengthData}%)`,
              }}
              onClick={(e) => {
                index = i;
                slidesRef.current.style.transform = `translateX(-${
                  widthBoxSlider * index
                }px)`;
                test(index);
              }}
            ></div>
          ))}
        </div>
        <div
          className="slides"
          ref={slidesRef}
          style={{
            width: `calc(${widthBoxSlider * lengthData}px)`,
          }}
        >
          {db.map((item, index) => (
            <div className="slide" key={index}>
              <img src={item.url} alt="a" draggable={false} />
            </div>
          ))}
        </div>
        <div
          className="btn prev"
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
          onMouseUp={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            if (index === 0) {
              return;
            }
            index--;
            slidesRef.current.style.transform = `translateX(-${
              widthBoxSlider * index
            }px)`;
            test(index);
          }}
        >
          {" "}
          <i className="bi bi-chevron-left"></i>
        </div>

        <div
          className="btn next"
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
          onMouseUp={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            if (index < lengthData) {
              index++;
            } else {
              index = 0;
            }
            slidesRef.current.style.transform = `translateX(-${
              widthBoxSlider * index
            }px)`;
            test(index);
          }}
        >
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}

export default CardSwipe;
