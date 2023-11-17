import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import InfoDisplay from './InfoDisplay';

function App() {
  const [message,setMessage ] = useState("Welcome to my App!");
  const handleClick = () => {
    setMessage("6304113 Yossaran Nuannanta");
  };
  return (
    <div className="App">
      <header className="App-header">
        
      <InfoDisplay message={message} onClick={handleClick} />
      </header>
    </div>
  );
}

export default App;
