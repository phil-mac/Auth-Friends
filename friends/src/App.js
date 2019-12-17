import React from 'react';
import {Route, Link} from 'react-router-dom';

import './App.css';
import {PrivateRoute} from  './PrivateRoute';

import Login from './components/LogInPage';
import Landing from './components/LandingPage';
import Dashboard from './components/DashboardPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Friends List App</h1>
        </div>
        <div>
            <Link to='/landing' className='App-link'>Landing Page</Link>
            <Link to='/login' className='App-link'>Login</Link>
            <Link to='/dashboard' className='App-link'>Dashboard</Link>
            <hr />
        </div>
        <Route path='/landing' component={Landing} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
      </header>
    </div>
  );
}

export default App;
