import React from "react";

import useApi from "./hooks/useApi";
import { Row, Col, Card } from "antd";

const App = () => {
  const { loading, data } = useApi(
    "https://jsonplaceholder.typicode.com/users"
  );

  const UserRecords = data
    ? data.map((user, index) => (
        <Col span={6} key={index}>
          <Card className="card-content" title={user.name}>
            <span>
              <b>Username:</b>
              <p>{user.username}</p>
            </span>
            <span>
              <b>Email:</b>
              <p>{user.email}</p>
            </span>
          </Card>
        </Col>
      ))
    : "";

  if (loading) return <h1>Loading....</h1>;

  return <Row>{UserRecords}</Row>;
};

export default App;
