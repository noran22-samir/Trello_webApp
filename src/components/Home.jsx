import { Layout } from "antd";
import "antd/dist/reset.css";
import SideMenuList from "./sideMenuList";
import Navbar from "./NavBar";
import Avatar from "./avatar";
import PageContent from "./PageContent";

import logo from "../assets/images/logoimg.png";
const { Header, Sider, Content } = Layout;

const Home = ({ setScreen }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#f1f2f4", padding: 0 }}>
        <Navbar />
      </Header>

      <Layout>
        <Sider width={70} className="sidebar" style={{ background: "#f4f5f7" }}>
          <Avatar />
          <SideMenuList setScreen={setScreen} />{" "}
        </Sider>

        <Content style={{ background: "white" }}>
          <PageContent />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
