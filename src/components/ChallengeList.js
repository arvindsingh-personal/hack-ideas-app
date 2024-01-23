// src/components/ChallengeList.js
import React from "react";
import { List, Tag, Button } from "antd";

const ChallengeList = ({ challenges, onSort, onUpvote, onAddChallenge }) => {
  return (
    <div>
      <Button onClick={() => onSort("votes")}>Sort by Votes</Button>
      <Button onClick={() => onSort("date")}>Sort by Date</Button>
      <Button onClick={onAddChallenge}>Add Challenge</Button>
      <List
        itemLayout="vertical"
        dataSource={challenges}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              title={<a href="#">{item.title}</a>}
              description={item.description}
            />
            <div>
              {item.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div>
              Votes: {item.votes}{" "}
              <Button onClick={() => onUpvote(item.id)}>Upvote</Button>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ChallengeList;
