import React from "react";
import {Route} from 'react-router-dom';
import {Menu} from './pages/Menu';
import {Home} from "./pages/Home";
import {About} from "./pages/About";


function App() {
  return (
    <div className="">
        <Route path={'/'} exact component ={Home}/>
        <Route path={'/about'} exact render ={About}/>
        <Menu/>
    </div> 
  );
}

export default App;
