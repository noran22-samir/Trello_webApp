import React, { useState } from "react";
import { Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
const { SubMenu, Item } = Menu;
import "../styles/Navbar.css";

const NavMenuList = () => {
  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key));
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };
  return (
    <Menu
      mode="horizontal"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      className="menu-bar"
    >
      <Menu.SubMenu
        className="submenu"
        key="1"
        title={
          <span>
            Workspace{" "}
            <DownOutlined style={{ fontSize: "10px", marginLeft: "4px" }} />
          </span>
        }
      >
        <Menu.Item key="2">Workspace 1</Menu.Item>
        <Menu.Item key="3">Workspace 2</Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        className="submenu"
        key="4"
        title={
          <span>
            Recent{" "}
            <DownOutlined style={{ fontSize: "10px", marginLeft: "4px" }} />
          </span>
        }
      >
        <Menu.Item key="5">Recent 1</Menu.Item>
        <Menu.Item key="6">Recent 2</Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        className="submenu"
        key="7"
        title={
          <span>
            Starred{" "}
            <DownOutlined style={{ fontSize: "10px", marginLeft: "4px" }} />
          </span>
        }
      >
        <Menu.Item key="8">Starred 1</Menu.Item>
        <Menu.Item key="9">Starred 2</Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        className="submenu"
        key="10"
        title={
          <span>
            Templates{" "}
            <DownOutlined style={{ fontSize: "10px", marginLeft: "4px" }} />
          </span>
        }
      >
        <Menu.Item key="11">Templet 1</Menu.Item>
        <Menu.Item key="12">Templet 2</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};
export default NavMenuList;
