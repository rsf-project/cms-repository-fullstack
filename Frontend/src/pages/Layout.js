import {
  BarsOutlined,
  SolutionOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Avatar, Row, Col } from "antd";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useLocation, useNavigate } from "react-router-dom";

const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/category">Category</Link>, "/category", <BarsOutlined />),
  getItem(<Link to="/article">Article</Link>, "/article", <SolutionOutlined />),
];
const Dashboard = ({ content }) => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const Logout = () => {
    setCookie("token", "", { path: "/" });
    navigate("/");
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={location.pathname}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <div>
          <Row>
            <Col span={8}>
              <Avatar size={40} style={{ margin: "2%" }}>
                {cookie.username}
              </Avatar>
            </Col>
            <Col span={8} offset={8} style={{ textAlign: "right" }}>
              <a onClick={Logout}>
                <LogoutOutlined
                  style={{
                    fontSize: "250%",
                    padding: "2%",
                    color: "gray",
                  }}
                />
              </a>
            </Col>
          </Row>
        </div>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {content}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Created by RSF
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
