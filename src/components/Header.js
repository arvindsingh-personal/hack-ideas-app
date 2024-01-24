import {
  AppstoreAddOutlined,
  HomeOutlined,
  LogoutOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import { Flex, Layout, Menu, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const HeaderComponent = () => {
  const navigate = useNavigate();

  const items = [
    {
      icon: <HomeOutlined style={{ fontSize: "1.6rem" }} />,
      name: "Home",
      path: "/home",
    },
    {
      icon: <RadarChartOutlined style={{ fontSize: "1.6rem" }} />,
      name: "Challenges",
      path: "/home",
    },
    {
      icon: <AppstoreAddOutlined style={{ fontSize: "1.6rem" }} />,
      name: "Create Challenge",
      path: "/home/addchallenges",
    },
    {
      icon: <LogoutOutlined style={{ fontSize: "1.6rem" }} />,
      name: "Logout",
      path: "/",
    },
  ].map((head, index) => ({
    key: index + 1,
    label: (
      <Flex gap="middle" onClick={() => navigate(head?.path)}>
        {head.icon} {head.name}
      </Flex>
    ),
  }));

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div className="demo-logo">Hack Ideas</div>
      <Menu
        theme="dark"
        mode="horizontal"
        items={items}
        style={{
          flex: 1,
          justifyContent: "end",
          minWidth: 0,
        }}
      />
    </Header>
  );
};

export default HeaderComponent;
