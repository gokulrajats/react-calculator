import React from 'react';
import './App.css';
import Numbutton from './Numbutton';

function App(props) {
  const vals=[1,2,3,4,5,6,7,8,9,0,'+','-','x']
  return (
    
    <div className="App">

    <header className="App-header">
   <h1>Welcome to React Calculator</h1>
<input type="text" style={{padding:'20px 20px 20px 20px'}}>{props.text}</input>
   <ul>
     
      {vals.map((val, index) => {
        return <ul key={index}>{<Numbutton values={val}/>}</ul>
      })}
    
    </ul>
   
      
    </header>
    
  </div>

   
  );
}

export default App;
