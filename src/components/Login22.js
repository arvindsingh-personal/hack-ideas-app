import React from "react";
import { Form, Input, Button } from "antd";

const Login = ({ onLogin }) => {
  const onFinish = (values) => {
    onLogin(values.employeeId);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Employee ID"
        name="employeeId"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
