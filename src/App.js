import React, { Component }  from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, DropdownButton, Dropdown, ButtonToolbar } from 'react-bootstrap';

import NodeList from "./components/NodeList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      sortby: '',
      order: 'asc'
    }
  }

  componentDidMount() {
    const data = require('./UIE-InterviewProject.json');
    //data.sort(this.compareValues('Heading', 'asc'))
    this.setState({ data: data });
  }

  sortData(key, order='asc') {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
    	  return 0;
      }

      const varA = (typeof a[key] === 'string') ? a[key].toLowerCase() : a[key];
      const varB = (typeof b[key] === 'string') ? b[key].toLowerCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  async handleSorting(arg) {
    await this.setState({ sortby: arg });
    this.sort();
  }

  async handleOrdering(arg) {
    await this.setState({ order: arg });
    this.sort();
  }

  sort() {
    let data = this.state.data;
    this.setState({ data: data.sort(this.sortData(this.state.sortby, this.state.order))})
  }

  render() {
    return (
      <Container>
        <ButtonToolbar>
          <DropdownButton id="dropdown-sortby" title={"Sort by: " + this.state.sortby}>
            <Dropdown.Item as="button" onClick={() => this.handleSorting('Heading')}>Heading</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => this.handleSorting('Subheading')}>Subheading</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => this.handleSorting('Price')}>Price</Dropdown.Item>
          </DropdownButton>

          <DropdownButton id="dropdown-orderby" title={"Order by: " + this.state.order} className="ml-3">
            <Dropdown.Item as="button" onClick={() => this.handleOrdering('asc')}>Asc</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => this.handleOrdering('desc')}>Desc</Dropdown.Item>
          </DropdownButton>
        </ButtonToolbar>

        <NodeList nodes={this.state.data} />
      </Container>
    );
  }
}

export default App;
