import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import AdminRegisterPage from './Pages/AdminRegisterPage/AdminRegisterPage';
import { Switch, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <HashRouter basename='/'>
        <Switch>
         <Route path='/' exact component={LandingPage} />
         <Route path='/register' exact component={AdminRegisterPage} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;