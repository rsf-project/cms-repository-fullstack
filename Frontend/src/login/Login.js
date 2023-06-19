import { useCookies } from "react-cookie";
import { Button, Form, Input, Card, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Login as handleLogin } from "../controller/login";

const Login = () => {
  const navigate = useNavigate();
  const [jwtCookie, setJwtCookie] = useCookies();

  const handleSubmit = async (event) => {
    const payload = {
      phone: event.phone,
      password: event.password,
    };
    handleLogin(payload, setJwtCookie, navigate);
  };
  document.title = "Login";
  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: "100vh", backgroundColor: "#40b548" }}
    >
      <Col span={6}>
        <Card
          title="Welcome Back!"
          bordered={false}
          style={{
            width: "100%",
            padding: "2rem 0",
          }}
          headStyle={{
            textAlign: "center",
          }}
        >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={handleSubmit}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Please input your Phone!"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Please input your Password!"
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
