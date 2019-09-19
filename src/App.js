import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import NodeList from "./components/NodeList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    const data = require('./UIE-InterviewProject.json');
    this.setState({ data: data });
  }

  render() {
    return (
      <Container fluid>
        <NodeList nodes={this.state.data} />
      </Container>
    );
  }
}

export default App;
