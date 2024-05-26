import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/texas-luminescence-logo.jpeg`} alt="Texas Luminescence" />
            <h1>Texas Luminescence</h1>
          </div>
          <div className="center-logo">
          </div>
          <ul>
            <li><a href="#">Current Projects</a></li>
            <li><a href="#">Recruitment</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Log in</a></li>
            <li><button className="register-button">Register</button></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
