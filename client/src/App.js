import React from 'react';
import TitleBar from './Components/TitleBar';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <TitleBar/>
        <Home/>
    </div>
  );
}

export default App;
