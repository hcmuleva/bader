import React from 'react';

import {
  routes,
} from './LazyRoutes'
// import TrueFalseQuestionPage from '../teacher/myclass/detail/quiz/question/trueFalse';

import { Route, Redirect, Switch } from "react-router-dom";

const ContentComponent = ({ switchChecked }) => {
  const getDefaultPage = () => {
    const role = localStorage.getItem('selectedRole');
    switch (role) {
      case 'Admin':
        return (
          <Route path="/" exact>
            <Redirect to="/mandir" />
          </Route>
        );
      case 'Teacher':
        return (
          <Route path="/" exact>
            <Redirect to="/teacher" />
          </Route>
        );
      case 'Student':
        return (
          <Route path="/" exact>
            <Redirect to="/student" />
          </Route>
        );
      case 'Parent':
        return (
          <Route path="/" exact>
            <Redirect to="/parent" />
          </Route>
        );
      default:
        return  (<Route path="/" exact>
        <Redirect to="/manage-family" />
      </Route>);
    }
  };

  return (
    <div className={`${switchChecked ? 'switch-checked' : ''}`}>
      <Switch>
        {routes.map(route => {
          return (
            <Route
              path={route.path}
              key={route.path}
              component={route.component}
              exact={route.exact}
            />
          )
        })}
        {getDefaultPage()}
      </Switch>
    </div>
  );
};

export default ContentComponent;
