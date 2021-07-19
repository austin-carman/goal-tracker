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

function App() {
  return (
    <div className="App">
      <Header />

    {/* should I be using switch?? */}

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/add-goal'>
          <AddGoal />
        </Route>

        <PrivateRoute path='/profile'>
          <Profile />
        </PrivateRoute>

        <Route exact path='/'>
          <Home />
        </Route>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
