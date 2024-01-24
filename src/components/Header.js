import {
  AppstoreAddOutlined,
  HomeOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import { Flex, Layout, Menu, Typography } from "antd";
import React from "react";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const items = [
  {
    icon: <HomeOutlined style={{ fontSize: "1.6rem" }} />,
    name: "Home",
  },
  {
    icon: <RadarChartOutlined style={{ fontSize: "1.6rem" }} />,
    name: "Challenges",
  },
  {
    icon: <AppstoreAddOutlined style={{ fontSize: "1.6rem" }} />,
    name: "Create Challenge",
  },
].map((head, index) => ({
  key: index + 1,
  label: (
    <Flex gap="middle">
      {head.icon} {head.name}
    </Flex>
  ),
}));

const HeaderComponent = () => {
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
