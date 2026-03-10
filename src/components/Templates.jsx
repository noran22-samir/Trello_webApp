import { FSection } from "./templateComponents/FeaturedCategoriesSection";
import { TempSection } from "./templateComponents/TempSection";
import Navbar from "./NavBar";
import { Layout } from "antd";
import SideMenuList from "./sideMenuList";

const { Sider } = Layout;

const Templates = ({ setScreen }) => {
  return (
    <>
      <Navbar />

      <div className="flex">
        <Sider width={70} className="sidebar" style={{ background: "#f4f5f7" }}>
          <SideMenuList setScreen={setScreen} />
        </Sider>

        <div className="flex flex-1 flex-col">
          <FSection />
          <TempSection />
        </div>
      </div>
    </>
  );
};

export default Templates;
