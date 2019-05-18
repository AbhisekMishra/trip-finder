import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Label, Input, ButtonGroup
} from 'reactstrap';

export default class InputForm extends React.Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    locations: PropTypes.arrayOf.isRequired,
    getLocationList: PropTypes.func.isRequired,
    setSource: PropTypes.func.isRequired,
    setDestination: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired,
    fetchShortestPath: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getLocationList } = this.props;
    getLocationList();
  }

  handleSearch = (e) => {
    e.preventDefault();
    const {
      source, destination, filter, fetchShortestPath
    } = this.props;
    if (source && destination && filter) fetchShortestPath({ source, destination, filter });
  }

  render() {
    console.log(this.props);
    const {
      source, destination, filter, locations, setSource, setDestination, setFilter,
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch}>
        <FormGroup>
          <Label for="exampleSelect">Source</Label>
          <Input type="select" name="select" onChange={e => setSource(e.target.value)} value={source}>
            <option key="">Please Select</option>
            {locations.filter(location => location !== destination).map(location => (
              <option key={location}>{location}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Destination</Label>
          <Input type="select" name="select" onChange={e => setDestination(e.target.value)} value={destination}>
            <option key="">Please Select</option>
            {locations.filter(location => location !== source).map(location => (
              <option key={location}>{location}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <ButtonGroup>
            <Button outline={filter !== 'cost'} type="button" onClick={() => setFilter('cost')}>Cost</Button>
            <Button outline={filter !== 'time'} type="button" onClick={() => setFilter('time')}>Time</Button>
          </ButtonGroup>
        </FormGroup>
        <Button color="primary">Search</Button>
      </Form>
    );
  }
}
