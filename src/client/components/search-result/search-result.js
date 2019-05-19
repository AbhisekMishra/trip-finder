import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col, Spinner, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText
} from 'reactstrap';
import train from '../../images/train.svg';
import bus from '../../images/bus.svg';
import car from '../../images/car.svg';

const calculateTotalCost = result => result.reduce((acc, val) => ({ cost: acc.cost + val.cost })).cost;

const convertMinutesToHours = (minutes) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}:${m}`;
};

const calculateTotalDuration = (result) => {
  let totalMinutes = 0;
  result.forEach((r) => {
    totalMinutes = totalMinutes + (parseInt(r.duration.h, 10) * 60) + parseInt(r.duration.m, 10);
  });
  return convertMinutesToHours(totalMinutes);
};

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
                  <p>{`Duration: ${r.duration.h}:${r.duration.m} hours`}</p>
                  <p>
                    {'Cost:'}
                    {' '}
                    &pound;
                    {`${r.cost}`}
                  </p>
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
        {result.length > 0 && (
        <ListGroupItem>
          <p>{`Total duration: ${calculateTotalDuration(result)} hours`}</p>
          <p>
            {'Total cost:'}
            {' '}
            &pound;
            {`${calculateTotalCost(result)}`}
          </p>
        </ListGroupItem>
        )}
      </ListGroup>
    </Row>
  </Container>
);

SearchResult.propTypes = {
  isSearching: PropTypes.bool.isRequired,
  result: PropTypes.arrayOf.isRequired,
};

export default SearchResult;
