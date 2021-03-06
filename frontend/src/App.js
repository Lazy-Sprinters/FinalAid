import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import AdminRegisterPage from './Pages/AdminRegisterPage/AdminRegisterPage';
import AdminLandingPage from './Pages/AdminLandingPage/AdminLandingPage';
import AdminLoginPage from './Pages/AdminLoginPage/AdminLoginPage';
import ManageVolunteers from './Pages/ManageVolunteers/ManageVolunteers';
import DonatePoorPage from './Pages/DonatePoorPage/DonatePoorPage';
import DonateWorker from './Pages/DonateWorker/DonateWorker';
import DonateStripePage from './Pages/DonateStripePage/DonateStripePage';
import SearchPage from './Pages/SearchPage/SearchPage';

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
         <Route path='/donatePoor' exact component={DonatePoorPage} />
         <Route path='/donateWorker' exact component={DonateWorker} />
         <Route path='/donateStripe' exact component={DonateStripePage} />
         <Route path='/search' exact component={SearchPage} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;