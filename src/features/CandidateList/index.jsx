import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import action from "../../actions";
// import action from "../../actions";
// import BtnHeart from "../../Components/Buttons/BtnHeart";
// import BtnLightning from "../../Components/Buttons/BtnLightning";
// import BtnNope from "../../Components/Buttons/BtnNope";
// import BtnStar from "../../Components/Buttons/BtnStar";
// import BtnUndo from "../../Components/Buttons/BtnUndo";
import CardSwipe from "../../Components/CardSwipe/CardSwipe";

import "./candidate-list.scss";

function CandidateList(props) {
  const candidate = useSelector((state) => state.candidate);
  const containerCardRef = useRef(null);
  const candidateRef = useRef(null);
  let istrueRef = useRef(false);
  const dispatch = useDispatch();
  let offsetX = "";
  let offsetY = "";

  useEffect(() => {
    const getBounding = containerCardRef.current.getBoundingClientRect();
    const getBoundingCandidate = candidateRef.current.getBoundingClientRect();
    console.log(getBounding);
    setPosition((p) => ({
      ...p,
      clientHeight: getBounding.height,
      clientWidth: getBounding.width,
      x2: getBounding.x,
      y2: getBounding.y,
      widthCandidate: getBoundingCandidate.width,
      heightCandidate: getBoundingCandidate.height,
    }));
  }, []);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    z: 0,
    offsetX: 0,
    offsetY: 0,
    clientWidth: 0,
    clientHeight: 0,
    x2: 0,
    y2: 0,
    transition: "unset",
    widthCandidate: 0,
    heightCandidate: 0,
    rotate: 0,
  });

  const handleDown = (e) => {
    istrueRef.current = true;
    offsetY = e.nativeEvent.offsetY;
    offsetX = e.nativeEvent.offsetX;
    setPosition({
      ...position,
      offsetX,
      offsetY,
    });
  };

  let timeoutRef = useRef(null);

  const handleUp = (e) => {
    istrueRef.current = false;
    clearTimeout(timeoutRef.current);

    if (position.x + 150 < 0) {
      setPosition({
        ...position,
        x: -1000,
        y: 0,
        transition: "transform .5s",
      });
      dispatch(action("REMOVE_FIRST"));

      return;
    }
    setPosition({
      ...position,
      x: 0,
      y: 0,
      rotate: 0,
      transition: "transform .5s",
    });
  };

  window.onmousemove = (e) => {
    if (istrueRef.current) {
      setPosition({
        ...position,
        x: e.clientX - position.x2 - position.offsetX,
        y: e.clientY - position.y2 - position.offsetY,
        rotate: position.x / 20,
        transition: "unset",
      });
    }
  };

  return (
    <div className="candidate-list" ref={candidateRef}>
      <div className="box-candidate">
        <div className="container-card" ref={containerCardRef}>
          {candidate.map((item, i) => {
            return (
              <div
                className="card"
                key={i + "s"}
                onMouseDown={handleDown}
                onMouseUp={handleUp}
                style={{
                  transform:
                    i === 0
                      ? `translate3d(${position.x}px,${position.y}px, 0) rotate(${position.rotate}deg) `
                      : `translate3d(0,0, 0) rotate(0deg) `,
                  zIndex: 10 - i,
                  transition: position.transition,
                  transformOrigin: "center center",
                }}
              >
                <CardSwipe db={item.data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CandidateList;
