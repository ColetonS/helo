import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav'
import routes from './routes'
import {withRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* conditionally render Nav somehow */}
      <Nav />
      {routes}
    </div>
  );
}

export default withRouter(App);
