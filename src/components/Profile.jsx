import React, { useState } from "react";
import { Layout } from "antd";
import SideMenuList from "./sideMenuList";
import Avatar from "./avatar";

const { Sider, Content } = Layout;

const ProfileVisibility = ({ setScreen }) => {
  const [username, setUsername] = useState("");

  const containerStyle = {
    maxWidth: "650px",
    margin: "40px auto",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    color: "#172b4d",
    border: "1px solid #dfe1e6",
    borderRadius: "3px",
  };

  const bannerStyle = {
    backgroundColor: "#f4f5f7",
    padding: "40px",
    textAlign: "center",
    borderBottom: "1px solid #dfe1e6",
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={70} className="sidebar" style={{ background: "#f4f5f7" }}>
        <Avatar />
        <SideMenuList setScreen={setScreen} />
      </Sider>

      <Content>
        <div style={containerStyle}>
          <div style={{ padding: "20px" }}>
            <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>
              Profile and Visibility
            </h2>
          </div>

          <div style={bannerStyle}>
            <div style={{ fontSize: "50px" }}>🐶</div>
          </div>

          <div style={{ padding: "24px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "600" }}>
              Manage your personal information
            </h3>

            <div
              style={{
                backgroundColor: "#fafbfc",
                borderLeft: "4px solid #0052cc",
                padding: "12px",
                fontSize: "14px",
                margin: "16px 0",
              }}
            >
              This is an Atlassian account. Edit your info through your{" "}
              <a href="#" style={{ color: "#0052cc" }}>
                Atlassian profile
              </a>
              .
            </div>

            <div style={{ marginTop: "30px" }}>
              <h4
                style={{
                  borderBottom: "1px solid #eee",
                  paddingBottom: "10px",
                  fontSize: "14px",
                }}
              >
                About
              </h4>
              <p
                style={{ fontSize: "12px", color: "#6b778c", margin: "10px 0" }}
              >
                Required fields are marked with an asterisk *
              </p>

              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    fontWeight: "bold",
                    fontSize: "12px",
                    marginBottom: "5px",
                  }}
                >
                  Username *
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "2px solid #dfe1e6",
                    borderRadius: "3px",
                    boxSizing: "border-box",
                  }}
                />
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6b778c",
                    marginTop: "8px",
                  }}
                >
                  🌐 <strong>Always public.</strong> Visible to anyone on the
                  internet.
                </div>
              </div>

              <button
                style={{
                  backgroundColor: "#0052cc",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default ProfileVisibility;
