import React, { useState } from "react";
import { Breadcrumb, Flex, Layout, Menu, theme } from "antd";
import {
  AppstoreAddOutlined,
  HomeOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import ChallengeList from "./ChallengeList";
import AddChallenge from "./AddChallenge";
import { ChallengeListData } from "../utils/db";
import Login from "./Login22";
import HeaderComponent from "./Header";

const { Content } = Layout;

const HackIdeas = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [challenges, setChallenges] = useState(ChallengeListData);
  const [addChallengeVisible, setAddChallengeVisible] = useState(false);

  const handleLogin = (employeeId) => {
    setLoggedInUser(employeeId);
  };

  const handleSort = (sortBy) => {
    const sortedChallenges = [...challenges].sort((a, b) => {
      if (sortBy === "votes") {
        return b.votes - a.votes;
      } else if (sortBy === "date") {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });

    setChallenges(sortedChallenges);
  };

  const handleUpvote = (challengeId) => {
    const updatedChallenges = challenges.map((challenge) => {
      if (challenge.id === challengeId) {
        return { ...challenge, votes: challenge.votes + 1 };
      }
      return challenge;
    });

    setChallenges(updatedChallenges);
  };

  const handleAddChallenge = (newChallenge) => {
    setChallenges([
      ...challenges,
      { ...newChallenge, id: challenges.length + 1 },
    ]);
  };

  return (
    <Layout>
      <HeaderComponent />
      <div>
        {loggedInUser ? (
          <>
            <h1>Welcome, Employee {loggedInUser}!</h1>
            <ChallengeList
              challenges={challenges}
              onSort={handleSort}
              onUpvote={handleUpvote}
              onAddChallenge={() => setAddChallengeVisible(true)}
            />
            <AddChallenge
              visible={addChallengeVisible}
              onCancel={() => setAddChallengeVisible(false)}
              onAdd={handleAddChallenge}
            />
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Layout>
  );
};

export default HackIdeas;
