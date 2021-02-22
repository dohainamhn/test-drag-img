import React, { useEffect, useState } from "react";

import "./navbar-desktop.scss";
import { useHistory } from "react-router-dom";

function NavbarDesktop(props) {
  const [showBack, setShowBack] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === "/profile") {
      return setShowBack(true);
    }
    setShowBack(false);
  }, [history]);

  const handlerRidrect = () => {
    history.push("./profile");
  };
  const handlerBack = () => {
    history.push("./main");
  };

  return (
    <div className="nav-desktop">
      <div className="row d-flex">
        <div className="col">
          <div
            // className={showBack ? "btn btn-back ishow" : "btn btn-back"}
            style={{ display: showBack && "block" }}
            className="btn btn-back"
            onClick={handlerBack}
          >
            <i className="bi bi-chevron-left d-flex-c"></i>
          </div>
        </div>

        <div
          className="col box"
          style={{
            transform: showBack && "translateX(50%)",
            animation: showBack ? "fade-in .3s" : "fade-out .3s",
          }}
        >
          <div
            className=" d-flex btn nav-desktop__img"
            onClick={handlerRidrect}
          >
            <img src="https://bitly.com.vn/3vhqjv" alt="avatar" />
          </div>
          <div className="btn redirect-proflie" onClick={handlerRidrect}>
            My Profile
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarDesktop;
