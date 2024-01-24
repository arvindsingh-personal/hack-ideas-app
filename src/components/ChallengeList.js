// src/components/ChallengeList.js
import React, { useContext, useState } from "react";
import {
  List,
  Tag,
  Button,
  Row,
  Col,
  Card,
  Space,
  Flex,
  Divider,
  Typography,
  Layout,
} from "antd";
import { ChallengeListData } from "../utils/db";
import {
  ArrowUpOutlined,
  CalendarFilled,
  DribbbleCircleFilled,
  TagFilled,
} from "@ant-design/icons";
import EmployeeContext from "../utils/employeeContext";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const { Link, Title, Paragraph, Text } = Typography;
const { Content } = Layout;

const style = { background: "#0092ff", padding: "8px 0" };

const ChallengeList = () => {
  const { challenges, setChallenges } = useContext(EmployeeContext);
  const navigate = useNavigate();

  const handleSort = (sortBy) => {
    console.log("sortBy", sortBy);

    const sortedChallenges = [...challenges].sort((a, b) => {
      if (sortBy === "dates") {
        return new Date(a.creationDate) - new Date(b.creationDate);
      } else if (sortBy === "votes") {
        return a.votes - b.votes;
      }
      return 0;
    });
    console.log("sortedChallenges", sortedChallenges);
    setChallenges(sortedChallenges);
  };
  // console.log(challenges);

  const handleUpvote = (challengeId) => {
    const updatedChallenges = challenges.map((challenge) => {
      if (challenge.id === challengeId) {
        return { ...challenge, votes: challenge.votes + 1 };
      }
      return challenge;
    });

    setChallenges(updatedChallenges);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      {/* Fixed portion */}
      <Layout.Sider
        width={850}
        style={{
          background: "#F5F5F5",
          height: "100%",
          position: "fixed",
          left: 0,
          top: 60,
          // marginLeft: "10px",
          padding: "100px 10px 0 100px",
        }}
      >
        <Flex gap="large" style={{ marginBottom: "3rem" }}>
          <Button type="primary" block onClick={() => handleSort("votes")}>
            Sort by Votes
          </Button>
          <Button type="primary" block onClick={() => handleSort("dates")}>
            Sort by Date
          </Button>
          <Button
            type="primary"
            block
            onClick={() => navigate("/home/addchallenges")}
          >
            Add Challenge
          </Button>
        </Flex>
        <Flex gap="large" vertical>
          <Title>The Worthy Web App Challenge</Title>
          <Paragraph style={{ fontSize: "1.4rem" }}>
            A Progress hack-for-good challenge designed to make the world a
            better place, one web app at a time.
          </Paragraph>
        </Flex>
        <Row gutter={16} style={{}}>
          <Col className="gutter-row" span={8}>
            <div style={{ paddingTop: "30px" }}>
              <Button
                type="primary"
                style={{ width: "100%", marginBottom: "10px" }}
              >
                Find more hackathons
              </Button>
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#475D65",
                  color: "#fff",
                }}
              >
                View the winners
              </Button>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div style={{}}>
              <Title level={5}>Who can participate</Title>
              <Text>- Above legal age of majority in country of residence</Text>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div style={{}}>
              <Title level={5}></Title>
              All countries/territories, excluding standard exceptions
            </div>
          </Col>
        </Row>
        {/* Content for the fixed portion */}
        {/* You can place your content here */}
      </Layout.Sider>

      {/* Scrollable portion */}
      <Layout style={{ marginLeft: 880, height: "100%" }}>
        <Content style={{ margin: "24px 0 30px 30px", overflow: "auto" }}>
          <Space direction="vertical" size={16}>
            {challenges?.map((item) => (
              <Card
                key={item?.id}
                // hoverable
                style={{ width: 500 }}
                // actions={[<TagFilled />]}
              >
                <Flex gap="middle" vertical>
                  <Link target="_blank">{item?.title}</Link>
                  <Flex gap="small">
                    <CalendarFilled
                      style={{ fontSize: "1.2rem", color: "#5A757F" }}
                    />
                    {item?.creationDate}
                    {/* {item?.title} */}
                  </Flex>
                </Flex>
                <Divider />
                <Flex gap="large" vertical>
                  <Flex gap="middle">
                    <DribbbleCircleFilled
                      style={{ fontSize: "1.2rem", color: "#5A757F" }}
                    />{" "}
                    Online
                  </Flex>
                  {item?.description}
                </Flex>
                <Divider />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Flex gap="middle">
                    <TagFilled
                      style={{ fontSize: "1.2rem", color: "#5A757F" }}
                    />
                    {item?.tags?.map((tag) => (
                      <Tag
                        key={tag}
                        bordered={false}
                        color="processing"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </Flex>
                  <Button
                    type="default"
                    shape="round"
                    icon={<ArrowUpOutlined />}
                    onClick={() => handleUpvote(item?.id)}
                  >
                    Upvote . {item?.votes}
                  </Button>
                </div>
              </Card>
            ))}
          </Space>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ChallengeList;
