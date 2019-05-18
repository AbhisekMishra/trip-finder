import React from 'react';
import {
  Container, Row, Col, Spinner, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText
} from 'reactstrap';
import train from '../../images/train.svg';
import bus from '../../images/bus.svg';
import car from '../../images/car.svg';

const SearchResult = ({ isSearching, result }) => (
  <Container>
    <Row>
      {isSearching && <Spinner color="primary" />}
      <ListGroup className="list-group-container">
        {result.map(r => (
          <ListGroupItem>
            <Row>
              <Col>
                <ListGroupItemHeading>{`${r.from} to ${r.to}`}</ListGroupItemHeading>
                <ListGroupItemText>
                  <p>{`Duration: ${r.duration.h}:${r.duration.m}`}</p>
                  <p>{`Cost: ${r.cost}`}</p>
                </ListGroupItemText>
              </Col>
              <Col>
                {r.mode === 'train' && <img src={train} alt="train" className="icon-img" />}
                {r.mode === 'car' && <img src={car} alt="car" className="icon-img" />}
                {r.mode === 'bus' && <img src={bus} alt="bus" className="icon-img" />}
              </Col>
            </Row>

          </ListGroupItem>
        ))}
      </ListGroup>
    </Row>
  </Container>
);

export default SearchResult;
