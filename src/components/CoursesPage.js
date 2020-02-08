import React from "react";
import { getCourses } from "../api/courseApi";
import { Link } from "react-router-dom";
class CoursesPage extends React.Component {
  state = {
    courses: []
  };

  componentDidMount() {
    getCourses().then(courses => {
      this.setState({ courses: courses });
    });
  }

  render() {
    return (
      <div>
        <h1 className="jumbotron">Courses</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(course => {
              return (
                <tr key={course.id}>
                  <td>
                    {" "}
                    <Link to={"/course/" + course.slug}>
                      {" "}
                      {course.title}{" "}
                    </Link>{" "}
                  </td>
                  <td> {course.authorId} </td>
                  <td> {course.category} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CoursesPage;
