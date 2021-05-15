import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import AdminRegisterPage from './Pages/AdminRegisterPage/AdminRegisterPage';
import AdminLandingPage from './Pages/AdminLandingPage/AdminLandingPage';
import AdminLoginPage from './Pages/AdminLoginPage/AdminLoginPage';
import ManageVolunteers from './Pages/ManageVolunteers/ManageVolunteers';
import { Switch, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <HashRouter basename='/'>
        <Switch>
         <Route path='/' exact component={LandingPage} />
         <Route path='/admin' exact component={AdminLandingPage} />
         <Route path='/register' exact component={AdminRegisterPage} />
         <Route path='/login' exact component={AdminLoginPage} />
         <Route path='/volunteers' exact component={ManageVolunteers} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;