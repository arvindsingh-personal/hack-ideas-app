// src/components/AddChallenge.js
import React, { useContext, useEffect, useState } from "react";
import { Modal, Form, Input, Button, Tag, Card, Checkbox, message } from "antd";
import EmployeeContext from "../utils/employeeContext";
import { useNavigate } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const AddChallenge = () => {
  const { challenges, setChallenges } = useContext(EmployeeContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [tags, setTags] = useState([]);

  const onFinish = (values) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    setChallenges([
      ...challenges,
      {
        ...values,
        id: challenges.length + 1,
        votes: 0,
        creationDate: formattedDate,
      },
    ]);
    form.resetFields();
    message.success("Challenge Created Successfully!");
    navigate("/home");
  };
  console.log(challenges);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card className="black-card" hoverable>
        <Form
          onFinish={onFinish}
          form={form}
          labelCol={{ span: 6, style: { color: "white" } }}
          wrapperCol={{ span: 18 }}
          initialValues={{ tags: [] }}
          labelAlign="left" // Align labels to the left
          colon={false} // Disable colon after labels
          style={{ color: "white" }}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please enter the title!" }]}
            style={{ color: "white" }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please enter the description!" },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Tags" name="tags">
            <Checkbox.Group options={["feature", "tech"]} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button type="primary" htmlType="submit">
              Create Challenge
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddChallenge;
