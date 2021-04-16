import React from 'react';
import MyCanvas from "./Components/canvas.js"
//import cover from "../public/cover.jpg";
import './App.css';
import { Height } from '@material-ui/icons';
function App() {
  return (
   <div className="App">
      <div style={{Height:"80px",width:"100%"}}><img width="100%" height="10%" src={"cover.jpg"}/></div>
    <MyCanvas/>
    </div>
    
  );
}

export default App;
