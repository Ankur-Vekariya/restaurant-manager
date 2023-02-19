import React from "react";
import { Col, Row } from "antd";
import { Button, Space } from "antd";
import { Colors } from "../Colors";
import { Typography } from "antd";

const { Title } = Typography;

const Navbar = () => {
  return (
    <Row
      style={{
        backgroundColor: Colors.yellow,
        height: 80,
        alignItems: "center",
      }}
    >
      <Col span={4} style={{ textAlign: "initial", fontSize: 50 }}>
        <Title style={{ color: Colors.darkBlue }}>Logo</Title>
      </Col>
      <Col span={12} style={{ textAlign: "initial", fontSize: 20 }}>
        <Title style={{ color: Colors.darkBlue }}>Restaurant Manager</Title>
      </Col>
      <Col span={8}>
        <Row style={{ justifyContent: "space-around" }}>
          <Button type="primary" style={{ backgroundColor: Colors.darkBlue }}>
            Home
          </Button>
          <Button type="primary" style={{ backgroundColor: Colors.darkBlue }}>
            Products
          </Button>
          <Button type="primary" style={{ backgroundColor: Colors.darkBlue }}>
            Settings
          </Button>
          <Button type="primary" style={{ backgroundColor: Colors.darkBlue }}>
            All Things
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default Navbar;
