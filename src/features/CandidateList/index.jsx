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
  const currentImgIndex = useRef(0)
  const [position,setPosition] = useState({
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
  const [position2,setPosition2] = useState({
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
  })
  const [position3,setPosition3] = useState({
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
  })
  useEffect(() => {
    const getBounding = containerCardRef.current.getBoundingClientRect();
    const getBoundingCandidate = candidateRef.current.getBoundingClientRect();
    console.log('getBounding');
    if(currentImgIndex.current === 0){
      setPosition((p) => ({
        ...p,
        clientHeight: getBounding.height,
        clientWidth: getBounding.width,
        x2: getBounding.x,
        y2: getBounding.y,
        widthCandidate: getBoundingCandidate.width,
        heightCandidate: getBoundingCandidate.height,
      }));
    }
    if(currentImgIndex.current === 1){
      setPosition2((p) => ({
        ...p,
        clientHeight: getBounding.height,
        clientWidth: getBounding.width,
        x2: getBounding.x,
        y2: getBounding.y,
        widthCandidate: getBoundingCandidate.width,
        heightCandidate: getBoundingCandidate.height,
      }));
    }
    if(currentImgIndex.current === 2){
      setPosition3((p) => ({
        ...p,
        clientHeight: getBounding.height,
        clientWidth: getBounding.width,
        x2: getBounding.x,
        y2: getBounding.y,
        widthCandidate: getBoundingCandidate.width,
        heightCandidate: getBoundingCandidate.height,
      }));
    }
  }, []);

  const handleDown = (e) => {
    istrueRef.current = true;
    offsetY = e.nativeEvent.offsetY;
    offsetX = e.nativeEvent.offsetX;
    console.log('offsetY',offsetY)
    console.log('offsetX',offsetX);
    if(currentImgIndex.current ===0){
      setPosition({
        ...position,
        offsetX,
        offsetY,
      });
    }
    if(currentImgIndex.current ===1){
      setPosition2({
        ...position2,
        offsetX,
        offsetY,
      });
    }
    if(currentImgIndex.current === 2){
      setPosition3({
        ...position3,
        offsetX,
        offsetY,
      });
    }
  };

  let timeoutRef = useRef(null);

  const handleUp = (e) => {
  
    istrueRef.current = false;

    if(currentImgIndex.current === 0){

      if (position.x + 150 < 0) {
        setPosition({
          ...position,
          x: -1000,
          y: 0,
          transition: "transform .5s",
        });
        currentImgIndex.current = 1
        return;
      }
      setPosition({
        ...position,
        x: 0,
        y: 0,
        rotate: 0,
        transition: "transform .5s",
        
      });
    }else if(currentImgIndex.current === 1){
      if (position2.x + 150 < 0) {
        setPosition2({
          ...position2,
          x: -1000,
          y: 0,
          transition: "transform .5s",
        });
        setTimeout(() => {
          dispatch(action('REMOVE_FIRST'))
        }, 500);
        return
      }
      setPosition({
        ...position2,
        x: 0,
        y: 0,
        rotate: 0,
        transition: "transform .5s",
      });
    }
    else if(currentImgIndex.current ===2){
      if (position2.x + 150 < 0) {
        return
      }
      setPosition({
        ...position2,
        x: 0,
        y: 0,
        rotate: 0,
        transition: "transform .5s",
      });
    }
  };

  window.onmousemove = (e) => {
   if(currentImgIndex.current === 0){
    if (istrueRef.current) {
      setPosition({
        ...position,
        x: e.clientX - position.x2 - position.offsetX,
        y: e.clientY - position.y2 - position.offsetY,
        rotate: position.x / 20,
        transition: "unset",
      });
    }
   }
   else if(currentImgIndex.current === 1){
    if (istrueRef.current) {
      console.log('e.clientX',)
      setPosition2({
        ...position2,
        x: e.clientX - position2.x2 - position2.offsetX,
        y: e.clientY - position2.y2 - position2.offsetY,
        rotate: position2.x / 20,
        transition: "unset",
      });
    }
    else if(currentImgIndex.current === 2){
      if (istrueRef.current) {
        setPosition3({
          ...position3,
          x: e.clientX - position3.x2 - position3.offsetX,
          y: e.clientY - position3.y2 - position3.offsetY,
          rotate: position3.x / 20,
          transition: "unset",
        });
      }
   }
  };
}
useEffect(()=>{
  if(!istrueRef.current){
    const getBounding = containerCardRef.current.getBoundingClientRect();
    const getBoundingCandidate = candidateRef.current.getBoundingClientRect();
    setPosition2({
      ...position3,
      clientHeight: getBounding.height,
        clientWidth: getBounding.width,
        x2: getBounding.x,
        y2: getBounding.y,
        widthCandidate: getBoundingCandidate.width,
        heightCandidate: getBoundingCandidate.height
    });
  }
},[candidate])
useEffect(()=>{
},[position])
window.onmouseup = ()=>{
  istrueRef.current = false;
}
  return (
    <div className="candidate-list" ref={candidateRef}>
      <div className="box-candidate">
        <div className="container-card" ref={containerCardRef}>
          {candidate.map((item, i) => {
            if(i === 0)
              {
                return (
                  <div
                    className="card"
                    key={i + "s"}
                    onMouseDown={handleDown}
                    onMouseUp={handleUp}
                    style={{
                      transform:
                           `translate3d(${position.x}px,${position.y}px, 0) rotate(${position.rotate}deg) `,
                      zIndex: 10 - i,
                      transition: position.transition,
                      transformOrigin: "center center",
                    }}
                  >
                    <CardSwipe db={item.data} />
                  </div>
                );
              }
              else if(i===1){
                return (
                  <div
                    className="card"
                    key={i + "s"}
                    onMouseDown={handleDown}
                    onMouseUp={handleUp}
                    style={{
                      transform:
                           `translate3d(${position2.x}px,${position2.y}px, 0) rotate(${position2.rotate}deg) `,
                      zIndex: 10 - i,
                      transition: position2.transition,
                      transformOrigin: "center center",
                    }}
                  >
                    <CardSwipe db={item.data} />
                  </div>
                )
              }
              else{
                return (
                  <div
                    className="card"
                    key={i + "s"}
                    onMouseDown={handleDown}
                    onMouseUp={handleUp}
                    style={{
                      transform:
                           `translate3d(${position3.x}px,${position3.y}px, 0) rotate(${position3.rotate}deg) `,
                      zIndex: 10 - i,
                      transition: position3.transition,
                      transformOrigin: "center center",
                    }}
                  >
                    <CardSwipe db={item.data} />
                  </div>
                )
              }
            }
           
          )}
        </div>
      </div>
    </div>
  );
}

export default CandidateList;
