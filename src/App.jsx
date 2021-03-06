import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "components/auth/Login";
import NewAccount from "components/auth/NewAccount";
import Projects from "components/projects/Projects";
import NotFound from "components/errors/NotFound";

import ProjectState from "context/projects/ProjectState";
import TaskState from "context/tasks/TaskState";
import AlertState from "context/alerts/AlertState";
import AuthState from "context/auth/AuthState";


function App() {
  return (
    <AlertState>
      <AuthState>
        <ProjectState>
          <TaskState>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/new-account" component={NewAccount} />
                <Route exact path="/projects" component={Projects} />
                <Route component={NotFound} />
              </Switch>
            </BrowserRouter>
          </TaskState>
        </ProjectState>
      </AuthState>
    </AlertState>
  );
}

export default App;
