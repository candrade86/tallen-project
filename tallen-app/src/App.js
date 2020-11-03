import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Pages/Login';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import './App.css';

function App() {
  return (
    //Main application component with route setup
    <div className="App" style={{height: "100vh"}}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/meeting" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Router>
    </div>
  );
}

export default App;
