import { connect } from 'react-redux';
import InputForm from './input-form';
import {
  setSource, setDestination, setFilter, getLocationList, fetchShortestPath
} from '../../redux/actions';

const mapStateToProps = state => ({
  source: state.source,
  destination: state.destination,
  filter: state.filter,
  locations: state.locations,
  result: state.result,
});

const mapDispatchToProps = dispatch => ({
  setSource: to => dispatch(setSource(to)),
  setDestination: from => dispatch(setDestination(from)),
  setFilter: filter => dispatch(setFilter(filter)),
  getLocationList: () => dispatch(getLocationList()),
  fetchShortestPath: payload => dispatch(fetchShortestPath(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputForm);
