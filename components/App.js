import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

//allows us to take State and Dispatch components and map them to Props

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

var App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
