import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import * as courseAPI from "../api/courseApi";

export function saveCourse(course) {
  return courseAPI.saveCourse(course).then(savedCourse => {
    dispatcher.dispatch({
      actionTypes: actionTypes.CREATE_COURSE,
      course: saveCourse
    });
  });
}
