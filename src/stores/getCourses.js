import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionType from "../actions/actionTypes";
const CHANGE_EVENT = "change";
// declare a private array to hold the data of your store
let _courses = [];
class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCourseBySlug(slug) {
    return _courses.find(course => course.slug === slug);
  }
}

const store = new CourseStore();

dispatcher.register(action => {
  switch (action.actionType) {
    case actionType.CHANGE_EVENT:
      _courses.push(action.courses);
      store.emitChange();
      break;
    default:
    //nothing to do here
  }
});

export default store;
