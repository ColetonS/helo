import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Nav />
      {routes}
    </div>
  );
}

export default App;
