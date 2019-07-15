import React from 'react';
import './App.css';
import './cssreset.css';
import TopNavBar from './components/TopNavBar/TopNavBar'
function App() {
  return (
    <div className="App">
        <div className="header">Star Wars</div>
        <TopNavBar  />
        <div className = "cards-section">
        </div>
    </div>
  );
}

export default App;
