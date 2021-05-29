import React from 'react';
import Clock from './components/clock';
import './App.css';

function App() {
  return (
    <div className="container">
      {/* get digital and Berlin-Clock */}
      <Clock/>
    </div>
  );
}

export default App;
