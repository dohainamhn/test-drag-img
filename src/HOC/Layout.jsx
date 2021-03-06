import React from "react";
import NavbarDesktop from "../Components/NavbarDesktop";

const Layout = ({ left, right, ...rest }) => {
  return (
    <>
      <div className="row layout">
        <div className="col left">
          <NavbarDesktop />
          {left.map((ComponentLeft, index) => (
            <React.Fragment key={index}>
              <ComponentLeft />
            </React.Fragment>
          ))}
        </div>

        <div className="col right">
          {right.map((ComponentRight, index) => (
            <React.Fragment key={index}>
              <ComponentRight />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Layout;
