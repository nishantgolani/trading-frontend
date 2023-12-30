import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componests/navbar/navbar';
import Footer from './componests/footer/footer';
import Login from './componests/login/Login';
import Home from './componests/home/home';
import About from './componests/about/about';
import Contact from './componests/contact/contact';
import { useState } from 'react';
import "./App.css"
function App() {

  // const [showNav, setShowNav] = useState(true);
  const [showHome, setShowHome] = useState(true);
  return (
    
    <Router>
     
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login funcNav={setShowHome} />
        </Route>
        <Route path="/about">
          <About funcNav={setShowHome}/>
        </Route>
        <Route path="/contact">
          <Contact funcNav={setShowHome} />
        </Route>
      </Switch>
      {showHome &&<Route path="/">
          <Home />
        </Route>
}
    
      <Footer />

    </Router >
   
  );
}

export default App;
