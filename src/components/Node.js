import React from "react";
import { Col, Card } from 'react-bootstrap';
import placeholder from '../assets/placeholder.png';

export default function Node(props) {
  const { Heading, Price, Subheading, showBridge } = props.node;

  function HeaderImage(props) {
    const showBridge = props.showBridge;
    if (showBridge) {
      return <div className="image-container bridge"></div>
    }
    return (
      <div className="image-container">
          <Card.Img variant="top" src={placeholder} />
      </div>
    )
  }

  return (
    <Col sm={6} md={3} className="col-custom mb-3">
      <Card>
        <HeaderImage showBridge={showBridge} />
        <Card.Body>
          <Card.Title>{Heading}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{Subheading}</Card.Subtitle>
        </Card.Body>
        <Card.Footer className="text-right text-success">
          <strong>${Price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</strong>
        </Card.Footer>
      </Card>
    </Col>
  );
}
