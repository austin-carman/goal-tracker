import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import AddGoal from './components/AddGoal';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import GoalDetails from './components/GoalDetails';
import AddSteps from './components/AddSteps';
import EditGoal from './components/EditGoal';
// import EditStep from './components/EditStep';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        {/* <Route path='/details/:goal_id'>
          <GoalDetails />
        </Route>
        <Route path='/add-goal'>
          <AddGoal />
        </Route>
        <Route path='/add-step/:goal_id'>
          <AddSteps />
        </Route>
        <Route path='/edit-goal/:goal_id'>
          <EditGoal />
        </Route> */}
        {/* <Route path='/edit-step/:step_id'>
          <EditStep />
        </Route> */}
        {/* <PrivateRoute path='/profile'  component={Profile} /> */}
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>

      {/* <Footer /> Do I want to keep a footer?? */} 
    </div>
  );
}

export default App;
