import React, { useState } from "react";

import "./nav-menu.scss";
import ListMatch from "./pages/ListMatch";
import ListMessage from "./pages/ListMessage";

const data = [
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
];

const messages = [];

function NavMenu(props) {
  const [btnActive, setBtnActive] = useState({
    active: true,
    width: "",
    offsetLeft: "",
  });

  const handleBtnMatches = (e) => {
    setBtnActive({
      btnActive,
      active: true,
      width: e.target.clientWidth,
      offsetLeft: e.target.offsetLeft,
    });
  };
  const handleBtnMessages = (e) => {
    setBtnActive({
      btnActive,
      active: false,
      width: e.target.clientWidth,
      offsetLeft: e.target.offsetLeft,
    });
  };

  return (
    <div className="nav-menu">
      <div className="box-btn">
        <div className="box-btn__matches btn" onClick={handleBtnMatches}>
          Matches
        </div>
        <div className="box-btn__messages btn" onClick={handleBtnMessages}>
          Messages
        </div>
        <div
          className="box-btn__under"
          style={{
            width: btnActive.width,
            left: btnActive.offsetLeft,
          }}
        ></div>
      </div>

      <div
        className="box-matches"
        style={{
          transition: "all .3s",
          transform: !btnActive.active && `translateX(-100%)`,
        }}
      >
        <ListMatch data={data} />
      </div>

      <div
        className="box-messages"
        style={{
          transition: "all .3s",
          transform: btnActive.active && `translateX(200%)`,
        }}
      >
        <ListMessage messages={messages} />
      </div>
    </div>
  );
}

export default NavMenu;
