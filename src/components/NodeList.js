import React from "react";
import Node from "./Node";
import { Row } from 'react-bootstrap';


export default function NodeList(props) {
  return (
    <Row>
      {props.nodes.map((node, index) => (
        <Node key={index} node={node} />
      ))}
    </Row>
  );
}
