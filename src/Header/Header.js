import React from "react";
import { Link } from "react-router-dom";
import TemporaryDrawer from "../Menu/Menu";

const Header = () => {
  return (
    <>
      <div style={{ backgroundColor: "red", width: "100%", height: "150px" }}>
        <h1>
          <Link to="/">Título Página</Link>
        </h1>
        <br />        
        {/* <Menu /> */}
        <TemporaryDrawer />

      </div>
    </>
  );
};
export default Header;
