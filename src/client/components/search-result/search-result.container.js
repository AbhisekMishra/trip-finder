import { connect } from 'react-redux';
import SearchResult from './search-result';

const mapStateToProps = state => ({
  isSearching: state.isSearching,
  result: state.result,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult);
