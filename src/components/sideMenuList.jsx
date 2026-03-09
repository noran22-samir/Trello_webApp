import { Menu } from "antd";
import {
  SettingOutlined,
  TeamOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  BellOutlined,
  InfoCircleOutlined,
  TableOutlined,
} from "@ant-design/icons";
import ProfileVisibility from "./Profile";
import WorkspaceSettings from "./Settings";

const SideMenuList = () => {
  return (
    <Menu className='sidemenu' mode="inline">
      <Menu.Item key="home" icon={<AppstoreOutlined />}>
        Home
      </Menu.Item>

      <Menu.Item key="team" icon={<TeamOutlined />}>
        Team
      </Menu.Item>

      <Menu.Item key="settings" icon={<SettingOutlined />}>
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

      <Menu.Item key="profile" icon={<ProfileVisibility />}>
        Profile
      </Menu.Item>

      <Menu.Item key="workspace_settings" icon={<WorkspaceSettings />}>
        Workspace
      </Menu.Item>
    </Menu>
  ); 
};

export default SideMenuList;