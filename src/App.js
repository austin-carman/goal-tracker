import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import AddGoal from './components/AddGoal';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import GoalDetails from './components/GoalDetails';
import AddSteps from './components/AddSteps';

function App() {
  return (
    <div className="App">
      <Header />
          {/* should I be using switch?? */}
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/details/:goal_id'>
          <GoalDetails />
        </Route>
        <Route path='/add-goal'>
          <AddGoal />
        </Route>
        <Route path='/add-step/:goal_id'>
          <AddSteps />
        </Route>
        <PrivateRoute path='/profile'  component={Profile} />
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>

      {/* <Footer /> Do I want to keep a footer?? */} 
    </div>
  );
}

export default App;
