import Logo from "../assets/images/logo.png";
import { Layout } from "antd";
import "antd/dist/reset.css";
import SideMenuList from "./sideMenuList";
// import Navbar from "./NavBar";
import Avatar from "./avatar";
const { Header, Sider, Content } = Layout;

function Home() {
  return (
    <Layout style={{ background: "#f1f2f4" }}>
      {/* <Header style={{ background: "#f1f2f4", padding: 0 }}>
        <Navbar />
      </Header> */}

      <Layout style={{ background: "#f1f2f4" }}>
        <Sider className="sidebar" style={{ background: "#f1f2f4" }}>
          <Avatar />
          <SideMenuList />
        </Sider>

        <Content style={{ background: "white" }}>
          <div>shahd</div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;
