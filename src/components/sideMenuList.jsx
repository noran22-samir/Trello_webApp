import { Menu} from "antd";
import {
  SettingOutlined,
  TeamOutlined,
    AppstoreOutlined,
    CalendarOutlined, BellOutlined,InfoCircleOutlined,
    
  
  TableOutlined,
} from "@ant-design/icons";


const SideMenuList = () => {
    return (
      <Menu className='sidemenu'>
        <Menu.Item key="home" icon={<AppstoreOutlined />}>
          
        </Menu.Item>

        <Menu.Item key="team" icon={<TeamOutlined />}>
          
        </Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined />}>
          
        </Menu.Item>
        <Menu.Item key="calender" icon={<CalendarOutlined />}>
          
        </Menu.Item>
        <Menu.Item key="notfications" icon={<BellOutlined />}>
          
        </Menu.Item>
        <Menu.Item key="info" icon={<InfoCircleOutlined />}>
          
        </Menu.Item>
      </Menu>
    );
}
export default SideMenuList;
