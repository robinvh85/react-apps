import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from "../../actions/courseActions";
import { bindActionCreators } from 'redux';

class ManageCoursePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Course Manage</h1>
      </div>
    );
  }
}

// ManageCoursePage.propTypes = {
//   courses: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// };

function mapStateToProps(state){
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
