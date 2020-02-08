import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Redirect, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import MangageCoursePage from "./ManageCoursePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={MangageCoursePage} />
        <Redirect from="/about-page" to="about" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
