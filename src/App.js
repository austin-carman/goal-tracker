import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import AddGoal from './components/AddGoal';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/add-goal'>
          <AddGoal />
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
