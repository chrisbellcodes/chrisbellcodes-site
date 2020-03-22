import React from 'react';
import Codes from './pages/Codes'
import Improv from './pages/Improv';
import Misc from './pages/Misc'
import Error from './pages/Error'
import Navbar from './components/Navbar'

import './App.css';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="App-logo">
        ChrisBell
      </h1>
      <Navbar />
      
      <Switch>
        <Route path="/" component={Codes} exact />
        <Route path="/improv" component={Improv} />
        <Route path="/misc" component={Misc} />
        <Route path="/misc" component={Misc} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
