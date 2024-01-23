import React, { useState } from "react";

import {
  Button,
  Checkbox,
  Form,
  Grid,
  Input,
  message,
  theme,
  Typography,
} from "antd";

import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title } = Typography;

const Login = () => {
  const { token } = useToken();
  const screens = useBreakpoint();
  const navigate = useNavigate();

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: "380px",
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
    },
    forgotPassword: {
      float: "right",
    },
    header: {
      marginBottom: token.marginXL,
    },
    section: {
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "#141414",
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
    },
    text: {
      color: token.colorTextSecondary,
      color: "#DCDCDC",
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
      color: "#DCDCDC",
    },
  };

  const [employeeForm, setEmployeeForm] = useState(true);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);

    const userDetails = JSON.parse(localStorage.getItem("UserDetails"));
    console.log(userDetails);

    let userExists = userDetails.some(
      (user) =>
        user?.employeeId === values?.employeeId ||
        (user?.email === values?.email && user?.password === values?.password)
    );

    if (userExists) {
      message.success("Successfully Login!");
      setTimeout(() => {
        navigate("/home");
      }, [2000]);
    } else message.error("Employee does not exists!");
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <Title style={styles.title}>Sign in</Title>
          <Text style={styles.text}>
            Welcome back to Hack Idea! Please enter your details below to sign
            in.
          </Text>
        </div>
        {employeeForm ? (
          <>
            {" "}
            <Form
              name="normal_login"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              layout="vertical"
              requiredMark="optional"
            >
              <Form.Item
                name="employeeId"
                rules={[
                  {
                    required: true,
                    message: "Please input your EmployeeID!",
                  },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="EmplployeeID" />
              </Form.Item>
              <Form.Item>
                <Button
                  style={styles.forgotPassword}
                  type="link"
                  onClick={() => setEmployeeForm(false)}
                >
                  Login with Password?
                </Button>
                {/* <a style={styles.forgotPassword} href="">
            Login with EmployeeId ?
          </a> */}
              </Form.Item>
              <Form.Item style={{ marginBottom: "0px" }}>
                <Button block="true" type="primary" htmlType="submit">
                  Log in
                </Button>
              </Form.Item>
            </Form>{" "}
          </>
        ) : (
          <Form
            name="normal_login"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            layout="vertical"
            requiredMark="optional"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                style={styles.forgotPassword}
                type="link"
                onClick={() => setEmployeeForm(true)}
              >
                Login with EmployeeID?
              </Button>
              {/* <a style={styles.forgotPassword} href="">
              Login with EmployeeId ?
            </a> */}
            </Form.Item>
            <Form.Item style={{ marginBottom: "0px" }}>
              <Button block="true" type="primary" htmlType="submit">
                Log in
              </Button>
            </Form.Item>
          </Form>
        )}
        <div style={styles.footer}>
          <Text style={styles.text}>Don't have an account?</Text>{" "}
          <Link to="/register">Sign up now</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
