import React from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import SettingsIcon from "@mui/icons-material/Settings";

import "./MenusBar.scss";
function MenusBar() {
  return (
    <div className="menusbar-container">
      <button className="search-tracks-button menu-button">
        <ManageSearchIcon sx={{ color: "white", fontSize: 40 }} />
      </button>
      <button className="search-tracks-button menu-button">
        <FormatListBulletedIcon sx={{ color: "white", fontSize: 40 }} />
      </button>
      <button className="search-tracks-button menu-button">
        <CollectionsBookmarkIcon sx={{ color: "white", fontSize: 40 }} />
      </button>
      <button className="search-tracks-button menu-button">
        <SettingsIcon sx={{ color: "white", fontSize: 40 }} />
      </button>
    </div>
  );
}

export default MenusBar;
