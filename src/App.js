import React,{useState} from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Login from './components/Login'
import useToken from './components/useToken';

function setToken(userToken) {
  sessionStorage.setItem('token',JSON.stringify(userToken))
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString)
  return userToken?.token
}

function App() {
  const { token, setToken } = useToken();

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