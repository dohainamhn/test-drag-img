import React, { useEffect, useRef, useState } from "react";
import BtnHeart from "../../Components/Buttons/BtnHeart";
import BtnLightning from "../../Components/Buttons/BtnLightning";
import BtnNope from "../../Components/Buttons/BtnNope";
import BtnStar from "../../Components/Buttons/BtnStar";
import BtnUndo from "../../Components/Buttons/BtnUndo";
import CardSwipe from "../../Components/CardSwipe/CardSwipe";

import "./candidate-list.scss";

const db = [
  {
    data: [
      {
        id: "117",
        name: "Daniel Ebersole",
        url: "https://picsum.photos/id/117/1544/1024",
      },
      {
        id: "118",
        name: "Rick Waalders",
        url: "https://picsum.photos/id/118/1500/1000",
      },
      {
        id: "119",
        name: "Nadir Balcikli",
        url: "https://picsum.photos/id/119/3264/2176",
      },
      {
        id: "12",
        name: "Paul Jarvis",
        url: "https://picsum.photos/id/12/2500/1667",
      },
      {
        id: "120",
        name: "Guillaume",
        url: "https://picsum.photos/id/120/4928/3264",
      },

      {
        id: "123",
        name: "Mark Doda",
        url: "https://picsum.photos/id/123/4928/3264",
      },
      {
        id: "124",
        name: "Anton Sulsky",
        url: "https://picsum.photos/id/124/3504/2336",
      },
      {
        id: "125",
        name: "Rick Waalders",
        url: "https://picsum.photos/id/125/1500/1000",
      },
    ],
  },
  {
    data: [
      {
        id: "117",
        name: "Daniel Ebersole",
        url: "https://picsum.photos/id/127/1544/1024",
      },
      {
        id: "118",
        name: "Rick Waalders",
        url: "https://picsum.photos/id/128/1500/1000",
      },
      {
        id: "119",
        name: "Nadir Balcikli",
        url: "https://picsum.photos/id/129/3264/2176",
      },
      {
        id: "12",
        name: "Paul Jarvis",
        url: "https://picsum.photos/id/134/2500/1667",
      },
      {
        id: "120",
        name: "Guillaume",
        url: "https://picsum.photos/id/110/4928/3264",
      },

      {
        id: "123",
        name: "Mark Doda",
        url: "https://picsum.photos/id/126/4928/3264",
      },
      {
        id: "124",
        name: "Anton Sulsky",
        url: "https://picsum.photos/id/134/3504/2336",
      },
      {
        id: "125",
        name: "Rick Waalders",
        url: "https://picsum.photos/id/154/1500/1000",
      },
    ],
  },
];
function CandidateList(props) {
  const boxCardRef = useRef([]);
  const candidateRef = useRef(null);

  let start = "";
  let istrue = false;
  let offsetX = "";
  let offsetY = "";
  let offsetLeft = "";
  let candidateWidth = "";
  const [positionCard, setPositionCard] = useState(null);
  useEffect(() => {
    let position = boxCardRef.current[0].getBoundingClientRect();
    setPositionCard(position);
  }, []);

  const handleMouseDown = (e) => {
    start = e.clientX - candidateRef.current.offsetLeft;
    istrue = true;
    offsetLeft = candidateRef.current.offsetLeft;

    offsetY = (e.nativeEvent.offsetY / positionCard.height) * 100;
    offsetX = (e.nativeEvent.offsetX / positionCard.width) * 100;

    candidateWidth = candidateRef.current.clientWidth;
  };
  window.onclick = (e) => {
    console.log(e.clientX, "window");
  };

  const handleMouseUp = (e, index) => {
    istrue = false;

    if (e.clientX - offsetLeft + 150 < start) {
      nope();
      return;
    }

    if (e.clientX - offsetLeft > start + 150) {
      like();

      return;
    }
    boxCardRef.current[0].style.transform = "none";
    boxCardRef.current[0].style.left = positionCard.x - offsetLeft + "px";
    boxCardRef.current[0].style.top = positionCard.y + "px";
  };

  const nope = (e) => {
    boxCardRef.current[0].style.transition = "all 1s";
    boxCardRef.current[0].style.transform = `translateX(${
      -candidateWidth || -candidateRef.current.clientWidth
    }px) rotate(30deg) `;
  };

  const like = (e) => {
    boxCardRef.current[0].style.transition = "all 1s";
    boxCardRef.current[0].style.transform = `translateX(${
      candidateWidth || candidateRef.current.clientWidth
    }px) rotate(-30deg) `;
  };

  window.onmousemove = (e) => {
    e.preventDefault();

    if (istrue) {
      boxCardRef.current[0].style.transition = "unset";
      boxCardRef.current[0].style.left = `${e.clientX - offsetLeft}px`;
      boxCardRef.current[0].style.top = `${e.clientY}px`;
      boxCardRef.current[0].style.transform = `translate(${-offsetX + "%"}, ${
        -offsetY + "%"
      })`;
    }
  };

  return (
    <div className="candidate-list" ref={candidateRef}>
      {db.map((item, index) => (
        <div
          className="box-card"
          key={index + "adad"}
          style={{
            zIndex: db.length - index,
          }}
          ref={(el) => (boxCardRef.current[index] = el)}
          onMouseDown={handleMouseDown}
          onMouseUp={(e) => {
            handleMouseUp(e, index);
          }}
        >
          <CardSwipe db={item.data} />
        </div>
      ))}

      <div className="list-btn">
        <div className="btn undo">
          <BtnUndo />
        </div>
        <div
          className="nope btn"
          onClick={(e) => {
            nope();
          }}
        >
          <BtnNope nope={nope} />
        </div>

        <div className="btn star">
          <BtnStar />
        </div>
        <div
          className="heart btn"
          onClick={(e) => {
            like();
          }}
        >
          <BtnHeart />
        </div>
        <div className="lightning btn">
          <BtnLightning />
        </div>
      </div>
    </div>
  );
}

export default CandidateList;
