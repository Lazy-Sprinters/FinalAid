import React from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import { Switch, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <HashRouter basename='/'>
        <Switch>
         <Route path='/' exact component={LandingPage} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;