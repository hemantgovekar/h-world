import React from 'react';
import {Row, Col, Card, Button, Container} from 'react-bootstrap';
import Posts from './Posts';
import './UserDetail.css';

const UserDetail = ({user}) => {
  return (
    <Container fluid className="user_detail_wrapper">
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <b>{user.company.name}</b>
            </Card.Header>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                Contact : {user.email} <br />
                Address : {user.address.suite}, {user.address.street},{' '}
                {user.address.city},<br />
                Website : {user.website} <br />
              </Card.Text>
              <Posts id={user.id}></Posts>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetail;
