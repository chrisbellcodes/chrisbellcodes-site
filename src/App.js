import React from 'react';
import Codes from './pages/Codes'

import './App.css';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path='/' component={Codes} exact />

    </Switch>
  );
}

export default App;
