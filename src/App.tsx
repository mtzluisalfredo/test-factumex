import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log('%c [ App ]-6', 'font-size:13px; background:#06EE8D; color:#2f3656;', process.env.REACT_APP_API_URL)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
