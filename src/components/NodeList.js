import React, { Component }  from 'react';
import Node from "./Node";
import { Row, Col, Button, Card } from 'react-bootstrap';

export default class NodeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageIndex: 0,
      pageNumber: 1
    }
  }

  handlePagination(arg) {
    let newPageIndex = null;
    let newPageNumber = null;

    if (arg === 'prev') {
      newPageIndex = this.state.pageIndex - 5;
      newPageNumber  = this.state.pageNumber - 1;
    }

    if (arg === 'next') {
      newPageIndex = this.state.pageIndex + 5;
      newPageNumber  = this.state.pageNumber + 1;
    }

    this.setState({ pageIndex: newPageIndex, pageNumber: newPageNumber })
  }

  render() {
    let from = this.state.pageIndex;
    let to = this.state.pageIndex + 5;

    return (
      <div>
        <Row className="pagination">
          <Col className="text-right">
            <Button variant="light"
              onClick={() => this.handlePagination('prev')}
              disabled={this.state.pageIndex === 0}
            >&larr; Previous</Button>
            <span className="page-number">Page {this.state.pageNumber}</span>
            <Button variant="light"
              onClick={() => this.handlePagination('next')}
              disabled={this.state.pageIndex+5 > this.props.nodes.length}
            >Next &rarr;</Button>
          </Col>
        </Row>

        <Row className="results">
          {this.props.nodes.slice(from, to).map((node, index) => (
            <Node key={index} node={node} />
          ))}
        </Row>
      </div>
    );
  }
}
