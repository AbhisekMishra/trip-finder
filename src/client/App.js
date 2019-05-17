import React, { Component } from 'react';
import './app.css';
import { Row, Col } from 'reactstrap';
import Header from './components/header';
import InputForm from './components/input-form';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Row className="body-container">
          <Col xs={12} sm={12} md={3}><InputForm /></Col>
          <Col />
        </Row>
      </div>
    );
  }
}
