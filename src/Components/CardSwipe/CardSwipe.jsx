import React, { useState, useRef, useEffect } from "react";
// import TinderCard from '../react-tinder-card/index'
import "./card-swipe.scss";

const db = [
  {
    name: "Richard Hendricks",
    url: "https://picsum.photos/seed/picsum/500/600",
  },
  {
    name: "Erlich Bachman",
    url: "https://picsum.photos/seed/picsum/500/600",
  },
  {
    name: "Monica Hall",
    url: "https://picsum.photos/seed/picsum/500/600",
  },
  {
    name: "Jared Dunn",
    url: "https://picsum.photos/seed/picsum/500/600",
  },
  {
    name: "Dinesh Chugtai",
    url: "https://picsum.photos/seed/picsum/500/600",
  },
];

let lengthData = db.length - 1;

function CardSwipe() {
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
    console.log(index);
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
          prev
        </div>

        <div
          className="btn next"
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
            document.querySelector(".slides").classList.add("hello");
          }}
        >
          next
        </div>
      </div>
    </div>
  );
}

export default CardSwipe;
