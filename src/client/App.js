import React from 'react';
import './app.css';
import { Row, Col } from 'reactstrap';
import Header from './components/header';
import InputForm from './components/input-form';
import SearchResult from './components/search-result';

const App = () => (
  <div>
    <Header />
    <Row className="body-container">
      <Col xs={12} sm={12} md={3}><InputForm /></Col>
      <Col xs={12} sm={12} md={{ size: 6, offset: 2 }}><SearchResult /></Col>
    </Row>
  </div>
);

export default App;
