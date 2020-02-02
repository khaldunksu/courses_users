import React from 'react';
import './App.css';
import { Switch, Route, NavLink, HashRouter } from 'react-router-dom';
import PeoplePage from './components/Users/PeoplePage'
import CoursesPage   from './components/Courses/CoursesPage'
//import NewCourses   from './NewCourses'

const App = () => (
  <div className="App">
    <h1>Table</h1>
    <HashRouter>
      <p className="ui secondary  menu">
        <NavLink className="item" to="/" exact>Home</NavLink>
        <NavLink className="item" to="/courses" exact>Courses</NavLink>
        <NavLink to="/users" exact className="item">Users</NavLink>
      </p>
      <Switch>
      <Route
          path="/"
          exact
          render={() => (
            <div>
              <h1 className="home">Home</h1>
              <div className="image" />
            </div>
          )}
        />
        <Route path="/courses/" component={CoursesPage} />
        <Route path="/users/" component={PeoplePage} />
        
      </Switch>
    </HashRouter>
  </div>
);

export default App;
 /*<NavLink className="item" to="/courses/new_cours" exact>Add</NavLink>
 <Route path="/courses/new_cours" component={NewCourses} />*/