import React from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Sidebar() {
  return (
    <div id="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to={"/"}>Dashboard</Link>
        </li>
        <li className="sidebar-list-item">
          <Link>
            Works
            <ArrowDropDownIcon className="icon" />
          </Link>
          <div class="dropdown-container">
            <ul className="sidebar-list">
              <li className="sidebar-list-item">
                <Link to={"work1"}>Work 1</Link>
              </li>
              <li className="sidebar-list-item">
                <Link to={"work2"}>Work 2</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
