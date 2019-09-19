import React from "react";
import { Col, Card } from 'react-bootstrap';

export default function Node(props) {
  const { Heading, Price, Subheading, showBridge } = props.node;
  return (
    <Col sm={6} md={3} className="mb-3">
      <Card>
        <Card.Header>
          <span className="text-muted"><strong>{Heading}</strong></span>
        </Card.Header>
        <Card.Body>{Subheading}</Card.Body>
      </Card>
    </Col>
  );
}
