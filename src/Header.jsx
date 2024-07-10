import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Header({ OpenSidebar }) {
  return (
    <div className="header">
      <div className="menu-icon">
        <MenuIcon className="icon" onClick={OpenSidebar} />
      </div>
    </div>
  );
}

export default Header;
