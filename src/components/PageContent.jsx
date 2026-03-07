import React from 'react'
import Kanban from './Kanban';
import SortFilterBoards from './SortFilterBoards';
import TemplateCard from "./TemplateCard";
import "../styles/PageContent.css";
import "../styles/TemplateCard.css";
import { AiOutlineStar } from "react-icons/ai"; 
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { DownOutlined } from "@ant-design/icons";
import Templateimg1 from "../assets/images/Template-img1.png"; 
import Templateimg2 from "../assets/images/Template-img2.png"; 
import Templateimg3 from "../assets/images/Template-img3.png"; 
import Templateimg4 from "../assets/images/Template-img4.png"; 

const PageContent = () => {
  return (
    <div className="pageContent">
      <button className="first-btn">
        Create new board
        <div className="plus-icon">+</div>
      </button>
      <div
        style={{
          width: "99%",
          margin: "20px auto",
          borderTop: "2px solid #cccccc8c",
        }}
      ></div>
      <div className="second-row">My Board</div>
      <div className="third-row">
        {" "}
        My Design
        <AiOutlineStar className="icons-third-row" />
        <FaUserFriends className="icons-third-row" />
        <button>
          <AiOutlineAppstore id="btn-board" />
        </button>
        <DownOutlined
          style={{ fontSize: "10px", marginLeft: "20px" }}
        ></DownOutlined>
      </div>
      <Kanban />
      <div
        style={{
          width: "99%",
          margin: "20px auto",
          borderTop: "2px solid #cccccc8c",
        }}
      ></div>
      <div id="popular">Popular Templets</div>
      <div id="subtitle">
        Get going faster with a template from trello community or
        <SortFilterBoards />
      </div>
      <div className="template-cards-container">
        <TemplateCard image={Templateimg1} title="Project Management" />
        <TemplateCard image={Templateimg2} title="Project Management" />
        <TemplateCard image={Templateimg3} title="Project Management" />
        <TemplateCard image={Templateimg4} title="Project Management" />
      </div>
      <div className="last-row">
        <div className="workspace-header">
          <span id="last-title">Trello Workspace</span>
          <div className="workspace-buttons">
            <button className="last-btns">Views</button>   
            <button className="last-btns">Members</button>
            <button className="last-btns">Settings</button>
            <button className="last-btns">Upgrade</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContent;
