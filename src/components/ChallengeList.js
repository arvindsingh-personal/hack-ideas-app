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
} from "antd";
import { ChallengeListData } from "../utils/db";
import {
  ArrowUpOutlined,
  CalendarFilled,
  DribbbleCircleFilled,
  TagFilled,
} from "@ant-design/icons";
import EmployeeContext from "../utils/employeeContext";
// import { Link } from "react-router-dom";

const { Link } = Typography;

const ChallengeList = ({ onSort, onUpvote, onAddChallenge }) => {
  const { challenges, setChallenges } = useContext(EmployeeContext);

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
    <div>
      <Button onClick={() => onSort("votes")}>Sort by Votes</Button>
      <Button onClick={() => onSort("date")}>Sort by Date</Button>
      <Button onClick={onAddChallenge}>Add Challenge</Button>
      <Space direction="vertical" size={16}>
        {challenges?.map((item) => (
          <Card
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Flex gap="middle">
                <TagFilled style={{ fontSize: "1.2rem", color: "#5A757F" }} />
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
    </div>
  );
};

export default ChallengeList;
