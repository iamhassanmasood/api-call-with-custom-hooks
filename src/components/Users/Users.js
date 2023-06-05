import React from "react";

import useApi from "./../../hooks/useApi";
import { Row, Col, Card, Typography } from "antd";
import "./Users.less";
import Loader from "../Loader/Loader";

const { Text } = Typography;
const { Meta } = Card;

const Users = () => {
  const { loading, data } = useApi("users");

  const UserRecords = data?.map((user, index) => (
    <Card
      hoverable
      style={{ width: 240, margin: "5px" }}
      cover={
        <img
          alt="example"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        />
      }
      key={index}
    >
      <Meta title={user.name} description={user.email} />
    </Card>
  ));

  if (loading) return <Loader />;

  return <Row>{UserRecords}</Row>;
};

export default Users;
