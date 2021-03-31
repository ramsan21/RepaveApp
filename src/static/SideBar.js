import React from "react";
import { PaveRepave } from "../pages/PaveRepave";
import { AdminSetupPage } from "../pages/AdminSetupPage";
import { DepartmentSetupPage } from "../pages/DepartmentSetupPage";
import { SubDepartmentSetupPage } from "../pages/SubDepartmentSetupPage";
import { DeviceSetupPage } from "../pages/DeviceSetupPage";
import { Settings, DesktopMac, Store, AccountBox } from "@material-ui/icons";

export const SideBar = [
  {
    id: 1,
    menuName: "Pave & Repave",
    menuDescription: "Pave & Repave DC",
    path: "/PaveRepave",
    component: PaveRepave,
    exact: true,
    icon: <Settings style={{ color: "white" }} />,
    submenu: [],
  },
  {
    id: 2,
    menuName: "Device Setup",
    menuDescription: "Device mac id setup menus",
    path: "/device",
    component: DeviceSetupPage,
    exact: true,
    icon: <DesktopMac style={{ color: "white" }} />,
    submenu: [],
  },
  {
    id: 3,
    menuName: "Invenory Setup",
    menuDescription: "Inventory setup menus",
    path: "/inventory",
    component: DeviceSetupPage,
    exact: true,
    icon: <Store style={{ color: "white" }} />,
    submenu: [],
  },
  {
    id: 4,
    menuName: "DC Details",
    menuDescription: "Dc Details",
    path: "/dc-details",
    component: DeviceSetupPage,
    exact: true,
    icon: <DesktopMac style={{ color: "white" }} />,
    submenu: [],
  },
  {
    id: 5,
    menuName: "Domain",
    menuDescription: "XYZ Domain",
    path: "/domain",
    component: DeviceSetupPage,
    exact: true,
    icon: <Store style={{ color: "white" }} />,
    submenu: [],
  },
];
