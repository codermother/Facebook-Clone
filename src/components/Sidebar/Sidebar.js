import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { ExpandMoreOutlined } from "@material-ui/icons";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://media-exp1.licdn.com/dms/image/C4D03AQHQYGDbxeYCHA/profile-displayphoto-shrink_200_200/0/1610390628952?e=1623283200&v=beta&t=un9GJuiZCd3T8URm-ccog_g4k5ACK0Ee8FnjQ7Vnf1k"
        title="Özge Coşkun Gürsucu"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messanger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
