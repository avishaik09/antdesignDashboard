import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  DashboardOutlined,
  UnorderedListOutlined,
  UserOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div>
      <Menu
        onClick={({ key }) => {
          if (key === "signout") {
          } else {
            navigate(key);
          }
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          { label: "Home", key: "/", icon: <HomeOutlined /> },
          {
            label: "Dashboard",
            key: "/dashboard",
            icon: <DashboardOutlined />,
          },
          {
            label: "Users List",
            key: "usersList",
            icon: <UnorderedListOutlined />,
            children: [
              { label: "Active Users", key: "/activeUsers" },
              { label: "Disabled User", key: "/disabledusers" },
            ],
          },

          { label: "Profile", key: "/profile", icon: <UserOutlined /> },
          {
            label: "Signout",
            key: "/signout",
            icon: <PoweroffOutlined />,
            danger: true,
          },
        ]}
      ></Menu>
    </div>
  );
}
