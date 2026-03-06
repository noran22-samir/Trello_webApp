import "../styles/Navbar.css";
import Logo from "./logo"; 
import logo from "../assets/images/logoimg.png";
import { Input } from "antd";
import NavMenuList from "./navMenuList";
// const { Search } = Input;
// import { CrownOutlined } from "@ant-design/icons";

const Navbar = () => {

  return (
    <div className="navbar">
      <Logo />
      <NavMenuList />
      <div className="Search-box">
        <input type="text" placeholder="Search" />
        <img src="" alt=""></img>
      </div>
      <button className="nav-btns">Create</button>
      <button className="nav-btns">
        Try premium
      </button>
    </div>
  );
};

export default Navbar;
