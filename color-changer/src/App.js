import './App.css';
import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const handleBgColorChange = () => {
    setTimeout(() => {
      const randomRed = Math.floor(Math.random() * 256);
      const randomGreen = Math.floor(Math.random() * 256);
      const randomBlue = Math.floor(Math.random() * 256);
      setBgColor(`rgb(${randomRed}, ${randomGreen}, ${randomBlue})`);
    }, 250);
  }
  

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <header className="App-header">
        <p>
          Change The Color:
        </p>
        <button onClick={handleBgColorChange}>
          Change background color
        </button>
      </header>
    </div>
  );
}

export default App;
