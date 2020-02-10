import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseAPI from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = props => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  function handleChange(event) {
    setCourse({
      ...course,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    courseAPI.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Added");
    });
  }

  return (
    <>
      <h2>Manage Coursee</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
