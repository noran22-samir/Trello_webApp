import { Menu } from "antd";
import {
  SettingOutlined,
  TeamOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  BellOutlined,
  InfoCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
const SideMenuList = ({ setScreen }) => {
  return (
    <Menu className="sidemenu" mode="inline">
      <Menu.Item
        key="home"
        icon={<AppstoreOutlined />}
        onClick={() => setScreen("home")}
      >
        Home
      </Menu.Item>

      <Menu.Item key="team" icon={<TeamOutlined />}>
        Team
      </Menu.Item>

      <Menu.Item
        key="settings"
        icon={<SettingOutlined />}
        onClick={() => setScreen("settings")}
      >
        Settings
      </Menu.Item>

      <Menu.Item key="calendar" icon={<CalendarOutlined />}>
        Calendar
      </Menu.Item>

      <Menu.Item key="notifications" icon={<BellOutlined />}>
        Notifications
      </Menu.Item>

      <Menu.Item key="info" icon={<InfoCircleOutlined />}>
        Info
      </Menu.Item>

      <Menu.Item
        key="profile"
        icon={<UserOutlined />}
        onClick={() => setScreen("profile")}
      >
        Profile
      </Menu.Item>

       <Menu.Item
        key="Templates"
        icon={<AppstoreOutlined/>}
        onClick={() => setScreen("Templates")}
      >
        Templates
      </Menu.Item>
    </Menu>
  );
};

export default SideMenuList;