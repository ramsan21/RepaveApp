import React from "react";
import { PaveRepavePage } from "../pages/PaveRepave";
import { AdminSetupPage } from "../pages/AdminSetupPage";
import { DepartmentSetupPage } from "../pages/DepartmentSetupPage";
import { SubDepartmentSetupPage } from "../pages/SubDepartmentSetupPage";
import { DeviceSetupPage } from "../pages/DeviceSetupPage";

import {
  Dns,
  DesktopMac,
  Build,
  AddToQueue,
  DonutLarge,
  Store,
} from "@material-ui/icons";

export const SideBar = [
  {
    id: 1,
    menuName: "DC Pave Repave",
    menuDescription: "Pave & Repave DC",
    path: "/paverepave",
    component: PaveRepavePage,
    exact: true,
    icon: <Dns style={{ color: "white" }} />,
    submenu: [],
  },
  {
    id: 2,
    menuName: "DC Pave Repave Tracking",
    menuDescription: "Device mac id setup menus",
    path: "/tracking",
    component: DeviceSetupPage,
    exact: true,
    icon: <DesktopMac style={{ color: "white" }} />,
    submenu: [],
  },
  {
    id: 3,
    menuName: "Health & Compliance",
    menuDescription: "Health and Compliance",
    path: "/healthcompliance",
    component: DeviceSetupPage,
    exact: true,
    icon: <Store style={{ color: "white" }} />,
    submenu: [],
  },
  {
    id: 4,
    menuName: "monitoring",
    menuDescription: "Dc Details",
    path: "/monitoring",
    component: DeviceSetupPage,
    exact: true,
    icon: <DesktopMac style={{ color: "white" }} />,
    submenu: [],
  },
  {
    id: 5,
    menuName: "Tools",
    menuDescription: "Tools",
    path: "/tools",
    component: DeviceSetupPage,
    exact: true,
    icon: <Store style={{ color: "white" }} />,
    submenu: [],
  },
];
