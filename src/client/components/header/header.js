import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Row,
  Col,
} from 'reactstrap';

const Header = () => (
  <div>
    <Navbar color="primary" dark full>
      <Row>
        <Col><NavbarToggler onClick={() => {}} /></Col>
        <Col><NavbarBrand href="/">Find my trip</NavbarBrand></Col>
      </Row>
    </Navbar>
  </div>
);

export default Header;
