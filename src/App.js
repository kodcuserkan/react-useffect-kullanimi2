import React, { useState, useEffect } from 'react';
import './App.css';
function App() {

  const [tur, setTur] = useState(0)

  useEffect(() => {
    document.title = `Öğe ${tur} tur attı.`;
  })

  {
    setTimeout(() => {
      setTur(tur + 1)
    }, 4000)
  }

  return (
    <div className="App">

      <nav>
        <h1 className="header-text">React useState ve useEffect</h1>
        <div className="box"></div>
        <div className="textArea">         
          <p id="denemeText"><b>{tur} defa turladı...</b></p>
        </div>
      </nav>
    </div>
  );
}

export default App;
