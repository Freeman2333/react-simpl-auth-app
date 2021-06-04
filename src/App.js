import React,{useState} from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Login from './components/Login'

function App() {
  const [token, setToken] = useState()

  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/preferences">
            <Preferences/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;