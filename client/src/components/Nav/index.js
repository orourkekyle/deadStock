import React from 'react';
import { Col, Row } from "../Grid";
import './style.css';
// import { render } from 'react-dom';
import { Nav } from 'rsuite';

// const styles = { width: 100, position: 'relative', zIndex: '2' };

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} vertical activeKey={active} onSelect={onSelect} style={{position: 'relative', zIndex: '2', width: 100}}>
      <Nav.Item eventKey="home">
        Home
      </Nav.Item>
      <Nav.Item eventKey="news">News</Nav.Item>
      <Nav.Item eventKey="solutions">Solutions</Nav.Item>
      <Nav.Item eventKey="products">Products</Nav.Item>
      <Nav.Item eventKey="about">About</Nav.Item>
    </Nav>
  );
};

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 'home'
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(activeKey) {
    this.setState({ active: activeKey });
  }
  render() {
    const { active } = this.state;
    return (
      <Row>
        <Col md={4}>
          <CustomNav active={active} onSelect={this.handleSelect} />
        </Col>

        <Col md={6}>
          <CustomNav appearance="tabs" active={active} onSelect={this.handleSelect} />
        </Col>
        <Col md={4}>
          <CustomNav appearance="tabs" reversed active={active} onSelect={this.handleSelect} />
        </Col>
        <Col md={6}>
          <CustomNav appearance="subtle" active={active} onSelect={this.handleSelect} />
        </Col>
        <Col md={4}>
          <CustomNav appearance="subtle" reversed active={active} onSelect={this.handleSelect} />
        </Col>
      </Row>
    );
  }
}

// ReactDOM.render(<Demo />);

export default Demo;