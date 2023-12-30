import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componests/navbar/navbar';
import Footer from './componests/footer/footer';
import Login from './componests/login/Login';
import Home from './componests/home/home'
import { useState } from 'react';
import "./App.css"
function App() {

  const [showNav, setShowNav] = useState(true);

  return (
    
    <Router>
      {showNav &&
      <Navbar />}
      <Switch>
        <Route path="/login">
          <Login funcNav={setShowNav} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {showNav &&
      <Footer />
}
    </Router >
   
  );
}

export default App;
