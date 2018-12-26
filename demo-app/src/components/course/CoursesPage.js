import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from "../../actions/courseActions";
import CourseList from '../../components/course/CourseList';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  courseRow(course, index){
    return <li key={index}>{course.title}</li>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/courses');
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit" value="Add Course" className="btn btn-primary" onClick={this.redirectToAddCoursePage} />
        <CourseList courses={this.props.courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state){
  // console.log("mapStateToProps", state);
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
