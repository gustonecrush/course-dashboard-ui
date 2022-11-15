import React, { useState } from "react";
import ItemMenu from "./ItemMenu";
import Profile from "./Profile";
import UpgradeBanner from "./UpgradeBanner";

const menus = [
  { id: 1, name: "Dashboard", icon: "icon_select_apps_solid.svg", pro: true },
  { id: 2, name: "Courses", icon: "icon_menu_solid.svg", pro: false },
  { id: 3, name: "Students", icon: "icon_user_solid.svg", pro: false },
  { id: 4, name: "Discussions", icon: "icon_mail_solid.svg", pro: true },
  { id: 5, name: "Reviews", icon: "icon_star_solid.svg", pro: true },
  { id: 6, name: "My Settings", icon: "icon_settings_solid.svg", pro: false },
  { id: 7, name: "Log Out", icon: "icon_exit_solid.svg", pro: false },
];

function Sidebar({ user }) {
  return (
    <div className="w-[23%] border-solid border-r-2 border-[#E6E6E6]">
      <Profile user={user} />
      <div class="px-5 py-5 flex flex-col justify-center items-center">
        {menus.map((item, index) => (
          <ItemMenu menu={item} key={index} active="Dashboard" />
        ))}
        <UpgradeBanner />
      </div>
    </div>
  );
}

export default Sidebar;
