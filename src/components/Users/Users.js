import React from "react";

import useApi from "./../../hooks/useApi";
import { Row, Col, Card, Typography } from "antd";
import "./Users.less";
import Loader from "../Loader/Loader";

const { Text } = Typography;

const Users = () => {
  const { loading, data } = useApi("users");

  const UserRecords = data?.map((user, index) => (
    <Col span={6} key={index}>
      <Card className="card-content" title={user.name}>
        <Row>
          <Text strong>Username:</Text>
          <Text>{user.username}</Text>
        </Row>
        <Row>
          <Text strong>Email:</Text>
          <Text>{user.email}</Text>
        </Row>
      </Card>
    </Col>
  ));

  if (loading) return <Loader />;

  return <Row>{UserRecords}</Row>;
};

export default Users;
