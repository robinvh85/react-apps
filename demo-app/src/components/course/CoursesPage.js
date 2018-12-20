import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from "../../actions/courseActions";
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: { title: '' }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({
      course: course
    });
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
    const course = this.state.course;
    course.title = '';
    this.setState({
      course: course
    });
  }

  courseRow(course, index){
    return <li key={index}>{course.title}</li>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <ul>
          {this.props.courses.map(this.courseRow)}
        </ul>
        <h2>Add course</h2>
        <input type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <button onClick={this.onClickSave}>
          Save
        </button>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state){
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  // return {
  //   createCourse: (course) => { dispatch(courseActions.createCourse(course)) }
  // };

  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
